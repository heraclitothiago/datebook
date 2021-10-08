import { GoogleCalendar } from 'datebook'

const config = CalendarOptions = {
  title: 'Happy Hour',
  location: 'The Bar, New York, NY',
  description: 'Let\'s blow off some steam with a tall cold one!',
  start: new Date('2022-07-08T19:00:00'),
  end: new Date('2022-07-08T23:30:00'),
  attendees: [
    {
      name: 'John Doe',
      email: 'john@doe.com',
      icsOptions: {
        rsvp: true
      }
    },
    {
      name: 'Jane Doe',
      email: 'jane@doe.com'
    }
  ],
  // an event that recurs every two weeks:
  recurrence: {
    frequency: 'WEEKLY',
    interval: 2
  }
}

const googleCalendar = new GoogleCalendar(config)
googleCalendar.render()
