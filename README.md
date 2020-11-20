Notifications System, alternative to pNotify.

Author: ElKiri86

## Requirements
 - ESX Framework

## Installation/Example
- Change pNotify to kiri_notifications in your Scripts.

TriggerEvent("pNotify:SetQueueMax", "center", 2)
                CHANGE
TriggerEvent("kiri_notifications:SetQueueMax", "center", 2)

If you also want notifications in es_extended, simply add this in es_extended/client/functions Line 47
```
ESX.ShowNotification = function(msg, job)
    if exports.kiri_notifications ~= nil then
        exports.kiri_notifications:KiriShowNotification(msg, job)
    else
        SetNotificationTextEntry('STRING')
        AddTextComponentSubstringPlayerName(msg)
        DrawNotification(false, true)
    end
end

ESX.ShowAdvancedNotification = function(title, subject, msg, icon, iconType, job)
    if exports.kiri_notifications ~= nil then
        exports.kiri_notifications:KiriShowAdvancedNotification(title, subject, msg, icon, iconType, job)
    else
        SetNotificationTextEntry('STRING')
        AddTextComponentSubstringPlayerName(msg)
        SetNotificationMessage(icon, icon, false, iconType, title, subject)
        DrawNotification(false, false)
    end
end

```
Add in your server.cfg
```
start kiri_notifications
```
