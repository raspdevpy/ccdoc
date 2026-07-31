<template>
  <div class="arg-badge" :class="`required-${isRequired}`">
    <div class="tooltip">
      <div class="tooltip-text">
        <template v-if="isRequired">
          Required Argument
        </template>
        <template v-else>
          Optional Argument
          <div v-if="isCode">Default: <code>{{ props.default }}</code></div>
          <div v-else>Default: {{ props.default }}</div>
        </template>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
        <title>Tooltip</title>
        <g fill="none">
          <path
            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"
          />
        </g>
      </svg>
    </div>
    <div>{{ props.name }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: "Argument",
  },
  default: {
    type: String,
    default: "",
  },
  code: {
    type: [String, Boolean],
    default: false,
  }
})

const isRequired = computed(() => {
  return props.default === ""
})

const isCode = computed(() => {
  return props.code == "true"
})
</script>

<style>
.arg-badge {
    display: inline-flex;
    vertical-align: middle;
    padding: 4px 8px;
    margin: 3px 0;
    align-items: center;
    border-radius: 8px;
    width: fit-content;
    font-size: 12px;
    gap: 6px;
    font-weight: 600;
}

.required-false {
    background-color: rgba(100, 100, 200, 0.16);
    color: rgb(150, 150, 200);
    border: 1px solid rgba(100, 100, 200, 0.2);
}

.required-true {
    background-color: rgba(200, 100, 150, 0.16);
    color: rgb(200, 100, 150);
    border: 1px solid rgba(200, 100, 150, 0.2);
}

.tooltip {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.tooltip-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    visibility: hidden;
    border-radius: 8px;
    opacity: 0;
    position: absolute;
    left: -185px;
    width: 150px;
    padding: 5px 10px;
    z-index: 20;
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
    border: 1px solid rgba(150, 150, 150, 0.3);
    transition: opacity 0.3s ease, visibility 0.2s ease, transform 0.3s ease-out;
    transform: translateX(-10px);
}

html[data-theme="dark"] .tooltip-text {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
    transform: translateX(0px);
}

@media screen and (max-width: 768px) {
    .tooltip-text {
        left: -10px;
        top: 25px;
        transform: translateY(10px);
    }
    .tooltip:hover .tooltip-text {
        transform: translateY(0px);
    }
}
</style>