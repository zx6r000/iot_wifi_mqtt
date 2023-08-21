input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.publishMqttMessage("moi microbit", "topic1", ESP8266_IoT.QosList.Qos0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
"fabrice",
"fabrice",
"aim7sparrow",
""
)
basic.showLeds(`
    # . . . #
    # # . # #
    . . # . .
    . # . # .
    # # . # #
    `)
basic.pause(5000)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        ESP8266_IoT.connectWifi("imotep", "Deltaforce322851!")
        basic.pause(5000)
    }
    if (ESP8266_IoT.isMqttBrokerConnected()) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        ESP8266_IoT.connectMQTT("192.168.0.230", 1883, false)
    }
})
