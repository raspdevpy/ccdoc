git pull 
npm run build
sudo rsync -avu --delete "./guide/.vuepress/dist" "/var/www/"