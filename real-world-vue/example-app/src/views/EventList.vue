<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { getEvents } from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    getEvents()
      .then(({ data }) => (this.events = data))
      .catch(err => console.error(`There was an Error: ${err}`))
  }
}
</script>

<style></style>
