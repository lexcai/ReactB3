import React, { Component, useState } from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendrierPicker = () => {

        const locales = {
            "en-US": require("date-fns/locale/en-US"),
        };
        const localizer = dateFnsLocalizer({
            format,
            parse,
            startOfWeek,
            getDay,
            locales,
        });
        
        const events = [
            {
                title: "Big Meeting",
                allDay: true,
                start: new Date(2021, 6, 0),
                end: new Date(2021, 6, 0),
            },
            {
                title: "Vacation",
                start: new Date(2021, 6, 7),
                end: new Date(2021, 6, 10),
            },
            {
                title: "Conference",
                start: new Date(2021, 6, 20),
                end: new Date(2021, 6, 23),
            },
        ];
        const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
        const [allEvents, setAllEvents] = useState(events);
    
        function handleAddEvent() {
            setAllEvents([...allEvents, newEvent]);
        }
        return (
            <div className="App">
                <h2>Nouvelle évènement</h2>
                <div>
                    <input type="text" placeholder="Titre" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Début" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="Fin" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                        Ajouter évènement
                    </button>
                </div>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
            )
        }
export default CalendrierPicker;