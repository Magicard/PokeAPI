var mix= require("laravel-mix")
mix.sass("./css/main-style.scss","./public")
.copyDirectory("./images","./public")