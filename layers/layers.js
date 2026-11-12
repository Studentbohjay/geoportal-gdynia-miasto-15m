var wms_layers = [];


        var lyr_EsriLightGray_0 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="">Tiles © Esri — Esri, HERE, Garmin, © OpenStreetMap contributors</a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_granica_miasta_1 = new ol.format.GeoJSON();
var features_granica_miasta_1 = format_granica_miasta_1.readFeatures(json_granica_miasta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_miasta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_miasta_1.addFeatures(features_granica_miasta_1);
var lyr_granica_miasta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_miasta_1, 
                style: style_granica_miasta_1,
                popuplayertitle: 'granica_miasta',
                interactive: true,
                title: '<img src="styles/legend/granica_miasta_1.png" /> granica_miasta'
            });
var format_siatka_analiza_15m_2 = new ol.format.GeoJSON();
var features_siatka_analiza_15m_2 = format_siatka_analiza_15m_2.readFeatures(json_siatka_analiza_15m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_analiza_15m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_analiza_15m_2.addFeatures(features_siatka_analiza_15m_2);
var lyr_siatka_analiza_15m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_analiza_15m_2, 
                style: style_siatka_analiza_15m_2,
                popuplayertitle: 'siatka_analiza_15m',
                interactive: true,
    title: 'siatka_analiza_15m<br />\
    <img src="styles/legend/siatka_analiza_15m_2_0.png" /> Krytycznie niska dostępność (Pustynia usługowa)<br />\
    <img src="styles/legend/siatka_analiza_15m_2_1.png" /> Niska dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_2_2.png" /> Średnia dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_2_3.png" /> Dobra dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_2_4.png" /> Wzorcowe Miasto 15-minutowe<br />' });
var format_pustynie_uslugowe_kde_3 = new ol.format.GeoJSON();
var features_pustynie_uslugowe_kde_3 = format_pustynie_uslugowe_kde_3.readFeatures(json_pustynie_uslugowe_kde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pustynie_uslugowe_kde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pustynie_uslugowe_kde_3.addFeatures(features_pustynie_uslugowe_kde_3);
var lyr_pustynie_uslugowe_kde_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pustynie_uslugowe_kde_3, 
                style: style_pustynie_uslugowe_kde_3,
                popuplayertitle: 'pustynie_uslugowe_kde',
                interactive: true,
                title: '<img src="styles/legend/pustynie_uslugowe_kde_3.png" /> pustynie_uslugowe_kde'
            });
var format_poi_skonsolidowane_4 = new ol.format.GeoJSON();
var features_poi_skonsolidowane_4 = format_poi_skonsolidowane_4.readFeatures(json_poi_skonsolidowane_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_skonsolidowane_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_skonsolidowane_4.addFeatures(features_poi_skonsolidowane_4);
var lyr_poi_skonsolidowane_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_skonsolidowane_4, 
                style: style_poi_skonsolidowane_4,
                popuplayertitle: 'poi_skonsolidowane',
                interactive: true,
    title: 'poi_skonsolidowane<br />\
    <img src="styles/legend/poi_skonsolidowane_4_0.png" /> edukacja<br />\
    <img src="styles/legend/poi_skonsolidowane_4_1.png" /> handel<br />\
    <img src="styles/legend/poi_skonsolidowane_4_2.png" /> transport<br />\
    <img src="styles/legend/poi_skonsolidowane_4_3.png" /> zdrowie<br />\
    <img src="styles/legend/poi_skonsolidowane_4_4.png" /> zielen<br />' });
var format_proponowane_nowe_poi_5 = new ol.format.GeoJSON();
var features_proponowane_nowe_poi_5 = format_proponowane_nowe_poi_5.readFeatures(json_proponowane_nowe_poi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowane_nowe_poi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowane_nowe_poi_5.addFeatures(features_proponowane_nowe_poi_5);
var lyr_proponowane_nowe_poi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowane_nowe_poi_5, 
                style: style_proponowane_nowe_poi_5,
                popuplayertitle: 'proponowane_nowe_poi',
                interactive: true,
                title: '<img src="styles/legend/proponowane_nowe_poi_5.png" /> proponowane_nowe_poi'
            });

lyr_EsriLightGray_0.setVisible(true);lyr_granica_miasta_1.setVisible(true);lyr_siatka_analiza_15m_2.setVisible(true);lyr_pustynie_uslugowe_kde_3.setVisible(true);lyr_poi_skonsolidowane_4.setVisible(true);lyr_proponowane_nowe_poi_5.setVisible(true);
var layersList = [lyr_EsriLightGray_0,lyr_granica_miasta_1,lyr_siatka_analiza_15m_2,lyr_pustynie_uslugowe_kde_3,lyr_poi_skonsolidowane_4,lyr_proponowane_nowe_poi_5];
lyr_granica_miasta_1.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', });
lyr_siatka_analiza_15m_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'fid_2': 'fid_2', 'id_2': 'id_2', 'left_2': 'left_2', 'top_2': 'top_2', 'right_2': 'right_2', 'bottom_2': 'bottom_2', 'row_index_2': 'row_index_2', 'col_index_2': 'col_index_2', 'cnt_edukacja': 'cnt_edukacja', 'cnt_zdrowie': 'cnt_zdrowie', 'cnt_handel': 'cnt_handel', 'cnt_zielen': 'cnt_zielen', 'cnt_transport': 'cnt_transport', 'index_15m': 'index_15m', 'panel_html': 'panel_html', 'nazwa_dzielnicy': 'nazwa_dzielnicy', });
lyr_pustynie_uslugowe_kde_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_poi_skonsolidowane_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'kategoria': 'kategoria', });
lyr_proponowane_nowe_poi_5.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'CLUSTER_ID': 'CLUSTER_ID', });
lyr_granica_miasta_1.set('fieldImages', {'fid': 'TextEdit', 'nazwa': '', });
lyr_siatka_analiza_15m_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'fid_2': 'TextEdit', 'id_2': 'TextEdit', 'left_2': 'TextEdit', 'top_2': 'TextEdit', 'right_2': 'TextEdit', 'bottom_2': 'TextEdit', 'row_index_2': 'TextEdit', 'col_index_2': 'TextEdit', 'cnt_edukacja': 'TextEdit', 'cnt_zdrowie': 'TextEdit', 'cnt_handel': 'TextEdit', 'cnt_zielen': 'TextEdit', 'cnt_transport': 'TextEdit', 'index_15m': 'TextEdit', 'panel_html': 'TextEdit', 'nazwa_dzielnicy': '', });
lyr_pustynie_uslugowe_kde_3.set('fieldImages', {'fid': '', 'DN': '', });
lyr_poi_skonsolidowane_4.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_proponowane_nowe_poi_5.set('fieldImages', {'fid': 'TextEdit', 'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'CLUSTER_ID': 'Range', });
lyr_granica_miasta_1.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', });
lyr_siatka_analiza_15m_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'fid_2': 'hidden field', 'id_2': 'hidden field', 'left_2': 'hidden field', 'top_2': 'hidden field', 'right_2': 'hidden field', 'bottom_2': 'hidden field', 'row_index_2': 'hidden field', 'col_index_2': 'hidden field', 'cnt_edukacja': 'hidden field', 'cnt_zdrowie': 'hidden field', 'cnt_handel': 'hidden field', 'cnt_zielen': 'hidden field', 'cnt_transport': 'hidden field', 'index_15m': 'inline label - always visible', 'panel_html': 'hidden field', 'nazwa_dzielnicy': 'no label', });
lyr_pustynie_uslugowe_kde_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_poi_skonsolidowane_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'kategoria': 'no label', });
lyr_proponowane_nowe_poi_5.set('fieldLabels', {'fid': 'no label', 'MEAN_X': 'no label', 'MEAN_Y': 'no label', 'CLUSTER_ID': 'no label', });
lyr_proponowane_nowe_poi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});