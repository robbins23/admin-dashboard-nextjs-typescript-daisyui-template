"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { momentLocale as moment, namespaceTranslation } from "@/helper/i18n";
import { showNotification } from "@/components/features/common/headerSlice";
import { openRightDrawer } from "@/components/features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "@/helper/app-constants";
import { CalendarEvent, getCalendarEvents } from "@/helper/dummy-data";
import CalendarView from "@/components/CalendarView";
import { MomentInput } from "moment";

const t = namespaceTranslation("calendar");

const INITIAL_EVENTS = getCalendarEvents();

function Calendar(): React.JSX.Element {
  const dispatch = useDispatch();

  const [events, setEvents] = useState(INITIAL_EVENTS);

  // Add your own Add Event handler, like opening modal or random event addition
  // Format - {title :"", theme: "", startTime : "", endTime : ""}, typescript version comming soon :)
  const addNewEvent = (date: MomentInput) => {
    let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)];
    let newEventObj = {
      title: randomEvent.title,
      theme: randomEvent.theme,
      startTime: moment(date).startOf("day"),
      endTime: moment(date).endOf("day"),
    };
    setEvents([...events, newEventObj]);
    dispatch(showNotification({ message: t("New Event Added!"), status: 1 }));
  };

  // Open all events of current day in sidebar
  const openDayDetail = ({ filteredEvents, title }: {
    filteredEvents: CalendarEvent[];
    title: string;
  }) => {
    dispatch(
      openRightDrawer({
        header: title,
        bodyType: RIGHT_DRAWER_TYPES.CALENDAR_EVENTS,
        extraObject: { filteredEvents },
      }),
    );
  };

  return (
    <>
      <CalendarView
        calendarEvents={events}
        addNewEvent={addNewEvent}
        openDayDetail={openDayDetail}
      />
    </>
  );
}

export default Calendar;
