<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr"; // 🔹 Import de la locale FR


const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  selectable: true,
  locale: frLocale,
  editable: false,
  aspectRatio: 1.1,
  events: [
    { title: 'Aqua poney', date: '2025-02-18', color: '#FFFA00' },
    { title: 'AG', date: '2025-02-20', color: '#000000' }
  ],
  eventClick: function (info) {
    alert('Event: ' + info.event.title + ' Date: ' + info.event.color);
  },
};
</script>

<template>
  <div>
    <h2 class="text-center text-assbt-light pt-4 pb-1">Evènements à venir</h2>
    <div class="col-12 bg-assbt-dark opacity80 text-assbt-light agenda-container p-4">
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <div :style="{ backgroundColor: arg.event.color }">
            <i>{{ arg.event.title }}</i>
          </div>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style scoped>
.agenda-container {
  border-radius: 10px;
}

.today-cell {
  background-color: darkolivegreen !important;
}
</style>