var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Basic_1 = new ol.format.GeoJSON();
var features_Basic_1 = format_Basic_1.readFeatures(json_Basic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basic_1.addFeatures(features_Basic_1);
var lyr_Basic_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basic_1, 
                style: style_Basic_1,
                interactive: true,
                title: '<img src="styles/legend/Basic_1.png" /> Basic'
            });
var format_Acidic_2 = new ol.format.GeoJSON();
var features_Acidic_2 = format_Acidic_2.readFeatures(json_Acidic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidic_2.addFeatures(features_Acidic_2);
var lyr_Acidic_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidic_2, 
                style: style_Acidic_2,
                interactive: true,
                title: '<img src="styles/legend/Acidic_2.png" /> Acidic'
            });
var format_Neutral_3 = new ol.format.GeoJSON();
var features_Neutral_3 = format_Neutral_3.readFeatures(json_Neutral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neutral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neutral_3.addFeatures(features_Neutral_3);
var lyr_Neutral_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neutral_3, 
                style: style_Neutral_3,
                interactive: true,
                title: '<img src="styles/legend/Neutral_3.png" /> Neutral'
            });
var format_none_4 = new ol.format.GeoJSON();
var features_none_4 = format_none_4.readFeatures(json_none_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_none_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_none_4.addFeatures(features_none_4);
var lyr_none_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_none_4, 
                style: style_none_4,
                interactive: true,
                title: '<img src="styles/legend/none_4.png" /> none'
            });
var format_East_5 = new ol.format.GeoJSON();
var features_East_5 = format_East_5.readFeatures(json_East_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_East_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_East_5.addFeatures(features_East_5);
var lyr_East_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_East_5, 
                style: style_East_5,
                interactive: true,
                title: '<img src="styles/legend/East_5.png" /> East'
            });
var format_South_6 = new ol.format.GeoJSON();
var features_South_6 = format_South_6.readFeatures(json_South_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_South_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_South_6.addFeatures(features_South_6);
var lyr_South_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_South_6, 
                style: style_South_6,
                interactive: true,
                title: '<img src="styles/legend/South_6.png" /> South'
            });
var format_Central_7 = new ol.format.GeoJSON();
var features_Central_7 = format_Central_7.readFeatures(json_Central_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Central_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Central_7.addFeatures(features_Central_7);
var lyr_Central_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Central_7, 
                style: style_Central_7,
                interactive: true,
                title: '<img src="styles/legend/Central_7.png" /> Central'
            });
var format_North_8 = new ol.format.GeoJSON();
var features_North_8 = format_North_8.readFeatures(json_North_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_North_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_North_8.addFeatures(features_North_8);
var lyr_North_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_North_8, 
                style: style_North_8,
                interactive: true,
                title: '<img src="styles/legend/North_8.png" /> North'
            });
var format_Recommendation_9 = new ol.format.GeoJSON();
var features_Recommendation_9 = format_Recommendation_9.readFeatures(json_Recommendation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recommendation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recommendation_9.addFeatures(features_Recommendation_9);
var lyr_Recommendation_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recommendation_9, 
                style: style_Recommendation_9,
                interactive: true,
                title: '<img src="styles/legend/Recommendation_9.png" /> Recommendation'
            });
var format_HotSpring_10 = new ol.format.GeoJSON();
var features_HotSpring_10 = format_HotSpring_10.readFeatures(json_HotSpring_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotSpring_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotSpring_10.addFeatures(features_HotSpring_10);
var lyr_HotSpring_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HotSpring_10, 
                style: style_HotSpring_10,
                interactive: true,
                title: '<img src="styles/legend/HotSpring_10.png" /> Hot Spring'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Basic_1.setVisible(true);lyr_Acidic_2.setVisible(true);lyr_Neutral_3.setVisible(true);lyr_none_4.setVisible(true);lyr_East_5.setVisible(true);lyr_South_6.setVisible(true);lyr_Central_7.setVisible(true);lyr_North_8.setVisible(true);lyr_Recommendation_9.setVisible(true);lyr_HotSpring_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Basic_1,lyr_Acidic_2,lyr_Neutral_3,lyr_none_4,lyr_East_5,lyr_South_6,lyr_Central_7,lyr_North_8,lyr_Recommendation_9,lyr_HotSpring_10];
lyr_Basic_1.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Acidic_2.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Neutral_3.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_none_4.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_East_5.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_South_6.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Central_7.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_North_8.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Recommendation_9.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', '高程': '高程', });
lyr_HotSpring_10.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr_Basic_1.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_Acidic_2.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_Neutral_3.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_none_4.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_East_5.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_South_6.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_Central_7.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_North_8.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_Recommendation_9.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', '高程': 'TextEdit', });
lyr_HotSpring_10.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr_Basic_1.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Acidic_2.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Neutral_3.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_none_4.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_East_5.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_South_6.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Central_7.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_North_8.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Recommendation_9.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', '高程': 'inline label', });
lyr_HotSpring_10.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'no label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'inline label', });
lyr_HotSpring_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});