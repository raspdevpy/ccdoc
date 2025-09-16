include .env

# Variables
# DOCKER_REGISTRY ?=
DOCKER_REPO ?= raspdevpy/$(shell basename `git remote get-url origin`)
VERSION ?= $(shell git describe --tags --always --dirty)
LATEST_TAG := latest
BUILD_DATE := $(shell date -u +"%Y-%m-%dT%H:%M:%SZ")
GIT_COMMIT := $(shell git rev-parse HEAD)

# Docker image tags
IMAGE_TAG := $(DOCKER_REGISTRY)/$(DOCKER_REPO):$(VERSION)
LATEST_IMAGE := $(DOCKER_REGISTRY)/$(DOCKER_REPO):$(LATEST_TAG)

.PHONY: help build push release clean login test

help: ## Show this help message
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build Docker image
	@echo "Building Docker image: $(IMAGE_TAG)"
	docker build \
		--build-arg BUILD_DATE=$(BUILD_DATE) \
		--build-arg GIT_COMMIT=$(GIT_COMMIT) \
		--build-arg VERSION=$(VERSION) \
		-t $(IMAGE_TAG) \
		-t $(LATEST_IMAGE) \
		.
	@echo "Built: $(IMAGE_TAG)"
	@echo "Built: $(LATEST_IMAGE)"

test: ## Test the Docker image
	@echo "Testing Docker image: $(IMAGE_TAG)"
	# docker run --rm $(IMAGE_TAG) curl http://localhost:80/index.html

test-interactive: ## Run an interactive shell in the Docker image for testing
	@echo "Starting interactive shell in Docker image: $(IMAGE_TAG)"
	docker run --rm -it $(IMAGE_TAG) sh

login: ## Login to Docker registry
	@echo "Logging into Docker registry: $(DOCKER_REGISTRY)"
	docker login $(DOCKER_REGISTRY)

push: ## Push Docker image to registry
	@echo "Pushing Docker image: $(IMAGE_TAG)"
	docker push $(IMAGE_TAG)
	docker push $(LATEST_IMAGE)
	@echo "Pushed: $(IMAGE_TAG)"
	@echo "Pushed: $(LATEST_IMAGE)"

release: build test push ## Build, test and push Docker image
	@echo "Release completed for version: $(VERSION)"

clean: ## Remove local Docker images
	@echo "Cleaning up local Docker images"
	-docker rmi $(IMAGE_TAG) 2>/dev/null || true
	-docker rmi $(LATEST_IMAGE) 2>/dev/null || true

# CI/CD helpers
ci-info: ## Show build information for CI
	@echo "VERSION=$(VERSION)"
	@echo "IMAGE_TAG=$(IMAGE_TAG)"
	@echo "BUILD_DATE=$(BUILD_DATE)"
	@echo "GIT_COMMIT=$(GIT_COMMIT)"