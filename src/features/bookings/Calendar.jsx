/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {getBookingById} from '../../services/apiBookings';

const Calendar = (props) => {
  const [events, setEvents] = useState([]);
  const [currentView, setCurrentView] = useState('timeGridDay');
  // eslint-disable-next-line no-unused-vars
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const formattedEvents = props.bookings.map((booking) => {
      const firstName = booking.primary_user_id?.first_name || '';
      const lastName = booking.primary_user_id?.last_name || '';

      return {
        id: booking._id,
        title: booking.title,
        description: booking.description,
        primaryUser: firstName + ' ' + lastName[0],
        room: booking.room_id.name,
        start: booking.start_time,
        end: booking.end_time,
        roomId: booking.room_id._id,
        eventBackgroundColor: getCorporateColour(booking.room_id._id),
        textColour: getTextColour(getCorporateColour(booking.room_id._id)),
      };
    });

    setEvents(formattedEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookings]);

  const predefinedColours = [
    '#5d1b1f8',
    '#1abc9c',
    '#2980b9',
    '#2078b4',
    '#1565c0',
    '#0d47a1',
  ];

  const getCorporateColour = (roomId) => {
    const hash = roomId.split('').reduce((acc, char) => {
      acc = (acc << 5) - acc + char.charCodeAt(0);
      return acc & acc;
    }, 0);

    return predefinedColours[Math.abs(hash) % predefinedColours.length];
  };

  const getTextColour = (backgroundColour) => {
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgb(${r},${g},${b})`;
    };

    const calculateLuminance = (rgb) => {
      const values = rgb.match(/\d+/g).map(Number);
      const [r, g, b] = values.map((val) => {
        val /= 255.0;
        return val <= 0.03928
          ? val / 12.92
          : Math.pow((val + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const textColour =
      calculateLuminance(hexToRgb(backgroundColour)) > 0.5
        ? '#000000'
        : '#ffffff';
    return textColour;
  };

  const handleEventClick = async (eventClickInfo) => {
    const bookingId = eventClickInfo.event._def.publicId;
    const booking = await getBookingById(bookingId);
    props.onEditBooking(await booking);
  };

  const renderEventContent = (eventInfo) => {
    const eventColour = eventInfo.event.extendedProps.eventBackgroundColor;
    const textColour = eventInfo.event.extendedProps.textColour;

    return (
      <div
        style={{
          backgroundColor: eventColour,
          eventBorderColor: eventColour,
          color: textColour,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2px',
          height: '100%',
          overflowY: currentView === 'timeGridDay' ? 'auto' : false,
          wordWrap: 'break-word',
        }}
      >
        <div>
          <p>
            {currentView === 'timeGridDay' ? (
              <>
                {`${eventInfo.event.extendedProps.room} ; booked by: ${eventInfo.event.extendedProps.primaryUser}`}
                <br />
                <b>Title:</b> {eventInfo.event.title}
                <br />
                {eventInfo.timeText}
              </>
            ) : (
              eventInfo.event.extendedProps.room
            )}
          </p>
        </div>
      </div>
    );
  };
  // Allows the conditional rendering of the size of the booking details
  const handleViewChange = (view) => {
    setCurrentView(view.view.type);
  };

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div style={{flex: 1, width: '100%', height: '100%', padding: '5%'}}>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridDay"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay',
          }}
          eventClick={handleEventClick}
          scrollTime="09:00:00"
          height="100%"
          displayEventTime={true}
          slotDuration="00:15:00"
          slotEventOverlap={false}
          timeZone="local"
          datesSet={handleViewChange}
        />
      </div>
    </section>
  );
};

export default Calendar;
