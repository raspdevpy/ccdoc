git pull https://raspdevpy:$gittoken@github.com/raspdevpy/vuedocs.git
npm run build
sudo rsync -avu --delete "./guide/.vuepress/dist" "/var/www/"