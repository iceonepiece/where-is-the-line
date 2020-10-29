const data = {
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://pomelofashion.imgix.net/img/p/1/9/8/2/8/8/198288.jpg",
        "position": "relative",
        "margin": "none",
        "size": "full",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "เดรสหัวเข็มขัดไม้พิมพ์ลายกล้วยไม้",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "text",
            "text": "450 ฿",
            "color": "#EE1111",
            "size": "lg"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "ซื้อสินค้า",
              "uri": "http://linecorp.com/"
            },
            "style": "primary",
            "color": "#FFA1F1"
          }
        ]
      }
    }
  ]
};

module.exports = data;
