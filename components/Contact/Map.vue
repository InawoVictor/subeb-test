<template>
    <div class="w-full h-full">
        <LMap ref="map" :zoom="zoom" :center="mapCenter">
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            layer-type="base"
            name="OpenStreetMap"
        />
        <LMarker :lat-lng="markerPosition">
        <LPopup>
            State Universal Basic Education Board (SUBEB), 120 Murtala 
            Mohammed Highway, Calabar, Cross River State
        </LPopup></LMarker
        >
    </LMap>
</div>
</template>
  
  <script setup lang="ts">
  const zoom = ref(12);
  const mapCenter = ref([4.9929659965602475, 8.3343127]); // Center of the map
  const markerPosition = ref([4.9929659965602475, 8.3343127]);
  </script>
  
  <style scoped></style>