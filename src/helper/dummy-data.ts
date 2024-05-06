import moment from 'moment';

interface CalendarEvent {
    title: string;
    theme: string;
    startTime: moment.Moment;
    endTime: moment.Moment;
}

interface RecentTransaction {
    name: string;
    avatar: string;
    email: string;
    location: string;
    amount: number;
    date: moment.Moment;
}

export interface Bill {
    invoiceNo: string;
    amount: string;
    description: string;
    status: string;
    generatedOn: string;
    paidOn: string;
}

export interface TeamMember {
    name: string;
    avatar: string;
    email: string;
    role: string;
    joinedOn: string;
    lastActive: string;
}

interface DummyDataObj {
    CALENDAR_INITIAL_EVENTS: CalendarEvent[];
    RECENT_TRANSACTIONS: RecentTransaction[];
    TEAM_MEMBERS_LIST : TeamMember[];
    BILLS : Bill[];
}

const DummyData: DummyDataObj = Object.freeze({
    CALENDAR_INITIAL_EVENTS: [
        { title: "Product call", theme: "GREEN", startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
        { title: "Meeting with tech team", theme: "PINK", startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
        { title: "Meeting with Cristina", theme: "PURPLE", startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
        { title: "Meeting with Alex", theme: "BLUE", startTime: moment().startOf('day'), endTime: moment().endOf('day') }, 
    ],

    RECENT_TRANSACTIONS: [
        { name: "Alex", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "alex@dashwind.com", location: "Paris", amount: 100, date: moment().endOf('day') },
        { name: "Ereena", avatar: "https://reqres.in/img/faces/2-image.jpg", email: "ereena@dashwind.com", location: "London", amount: 190, date: moment().add(-1, 'd').endOf('day') },
        { name: "John", avatar: "https://reqres.in/img/faces/3-image.jpg", email: "jhon@dashwind.com", location: "Canada", amount: 112, date: moment().add(-1, 'd').endOf('day') },
        { name: "Matrix", avatar: "https://reqres.in/img/faces/4-image.jpg", email: "matrix@dashwind.com", location: "Peru", amount: 111, date: moment().add(-1, 'd').endOf('day') },
    ]
    ,

    TEAM_MEMBERS_LIST : [
        { name: "Alex", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "alex@dashwind.com", role: "Owner", joinedOn: moment(new Date()).add(-5 * 1, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },
        { name: "Ereena", avatar: "https://reqres.in/img/faces/2-image.jpg", email: "ereena@dashwind.com", role: "Admin", joinedOn: moment(new Date()).add(-5 * 2, 'days').format("DD MMM YYYY"), lastActive: "15 min ago" },
        { name: "John", avatar: "https://reqres.in/img/faces/3-image.jpg", email: "jhon@dashwind.com", role: "Admin", joinedOn: moment(new Date()).add(-5 * 3, 'days').format("DD MMM YYYY"), lastActive: "20 hr ago" },
        { name: "Matrix", avatar: "https://reqres.in/img/faces/4-image.jpg", email: "matrix@dashwind.com", role: "Manager", joinedOn: moment(new Date()).add(-5 * 4, 'days').format("DD MMM YYYY"), lastActive: "1 hr ago" },
        { name: "Virat", avatar: "https://reqres.in/img/faces/5-image.jpg", email: "virat@dashwind.com", role: "Support", joinedOn: moment(new Date()).add(-5 * 5, 'days').format("DD MMM YYYY"), lastActive: "40 min ago" },
        { name: "Miya", avatar: "https://reqres.in/img/faces/6-image.jpg", email: "miya@dashwind.com", role: "Support", joinedOn: moment(new Date()).add(-5 * 7, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },
    ],

    BILLS : [
        { invoiceNo: "#4567", amount: "23,989", description: "Product usages", status: "Pending", generatedOn: moment(new Date()).add(-30 * 1, 'days').format("DD MMM YYYY"), paidOn: "-" },
        { invoiceNo: "#4523", amount: "34,989", description: "Product usages", status: "Pending", generatedOn: moment(new Date()).add(-30 * 2, 'days').format("DD MMM YYYY"), paidOn: "-" },
        { invoiceNo: "#4453", amount: "39,989", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 3, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 2, 'days').format("DD MMM YYYY") },
        { invoiceNo: "#4359", amount: "28,927", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 4, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 3, 'days').format("DD MMM YYYY") },
        { invoiceNo: "#3359", amount: "28,927", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 5, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 4, 'days').format("DD MMM YYYY") },
        { invoiceNo: "#3367", amount: "28,927", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 6, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 5, 'days').format("DD MMM YYYY") },
        { invoiceNo: "#3359", amount: "28,927", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 7, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 6, 'days').format("DD MMM YYYY") },
        { invoiceNo: "#2359", amount: "28,927", description: "Product usages", status: "Paid", generatedOn: moment(new Date()).add(-30 * 8, 'days').format("DD MMM YYYY"), paidOn: moment(new Date()).add(-24 * 7, 'days').format("DD MMM YYYY") },
    ]
    
});

export default DummyData;
