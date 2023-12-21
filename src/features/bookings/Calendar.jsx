import {useEffect, useState} from 'react';
import {Modal} from '@mui/material';
import useModal from '../../contexts/useModal.js';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {getBookings} from '../../services/apiBookings';
import EditBookingModalContent from '../../features/bookings/EditBookingModalContent.jsx';
import ModalBox from '../../components/modal/ModalBox.jsx';

const Calendar = (props) => {
  const {open, handleOpen, handleClose} = useModal();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const bookings = await getBookings(props.myBookingFilter);


        // eslint-disable-next-line no-unused-vars
        const formattedEvents = bookings.map((booking, index) => {
          const firstName = booking.primary_user_id?.first_name || '';
          const lastName = booking.primary_user_id?.last_name || '';
          
          return {
            id: booking._id,
            title: booking.title,
            primaryUser: firstName + ' ' + lastName[0],
            room: booking.room_id.name,
            start: new Date(booking.start_time),
            end: new Date(booking.end_time),
            roomId: booking.room_id._id,
            backgroundColour: getCorporateColour(booking.room_id._id),
            textColour: getTextColour(getCorporateColour(booking.room_id._id)),
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps, react/prop-types
  }, [props.myBookingFilter]);

  // Predefined set of corporate Colours
  const predefinedColours = [
    '#5d1b1f8', // Light Blue
    '#1abc9c', // Turquoise
    '#2980b9', // Blue
    '#2078b4', // Medium Blue
    '#1565c0', // Dark Blue
    '#0d47a1', // Very Dark Blue
  ];

  const getCorporateColour = (roomId) => {
    // Use the room_id._id to generate a consistent color
    const hash = roomId.split('').reduce((acc, char) => {
      acc = (acc << 5) - acc + char.charCodeAt(0);
      return acc & acc;
    }, 0);

    return predefinedColours[Math.abs(hash) % predefinedColours.length];
  };

  // return black or white depending on the generated eventBackground
  const getTextColour = (backgroundColour) => {
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgb(${r},${g},${b})`;
    };

    // Calculate luminance
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

  const renderEventContent = (eventInfo) => {
    const eventColour = eventInfo.event.extendedProps.backgroundColour;
    const textColour = eventInfo.event.extendedProps.textColour;

    return (
      <div
        style={{
          backgroundColor: eventColour,
          color: textColour,
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        <div>
          <p>{eventInfo.event.extendedProps.room}</p>
          <b>{eventInfo.timeText}</b>
          <p>{eventInfo.event.extendedProps.primaryUser}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div style={{flex: 1, width: '100%', height: '100%', padding: '5%'}}>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          height="100%"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek,timeGridDay',
          }}
          eventClick={handleOpen}
        />
      </div>
      <div>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {
              <ModalBox
                content={
                  <EditBookingModalContent
                    heading="Booking Details"
                    handleClose={handleClose}
                  />
                }
                height="h-auto"
                width="w-[38rem]"
              />
            }
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Calendar;
