description "Centralized notification system for FiveM by kiri"

ui_page "html/index.html"

client_script "notifications.lua"

export "KiriShowNotification"
export "KiriShowAdvancedNotification"
export "KiriShowProgressBar"
esport "KiriDrawTxt"
export "SetQueueMax"
export "SendNotification"


files {
    "html/index.html",
    "html/kiri_notifications.js",
    "html/noty.min.js",
    "html/noty.css",
    "html/animate.css",
    "html/themes/forasteros.css",    
    "html/sound-example.wav"
}
dependencies {
    'kiri_utils'
}
