import { Department } from "./department";
import { Doctor } from "./doctor";
import { Journal } from "./journal";

export type Admission = {
    journal: Journal;
    doctor?: Doctor[];
    department: Department;
};

// make a static list of admissions
export const ADMISSIONS: Admission[] = [
    {
        journal: {
            socialSecurityNumber: 1234567890,
            name: "John Doe"
        },
        doctor: [
            {
                id: "1",
                name: "Dr. John Doe",
                department: "Cardiology"
            },
            {
                id: "2",
                name: "Dr. Jane Doe",
                department: "Neurology"
            }
        ],
        department: "Cardiology"
    },
    {
        journal: {
            socialSecurityNumber: 2345678901,
            name: "Jane Doe"
        },
        doctor: [
            {
                id: "3",
                name: "Dr. John Smith",
                department: "Oncology"
            },
        ],
        department: "Oncology"
    },
    {
        journal: {
            socialSecurityNumber: 3456789012,
            name: "John Smith"
        },
        doctor: [
            {
                id: "5",
                name: "Dr. John Johnson",
                department: "Psychiatry"
            },
            {
                id: "6",
                name: "Dr. Jane Johnson",
                department: "Surgery"
            }
        ],
        department: "Psychiatry"
    },
    {
        journal: {
            socialSecurityNumber: 4567890123,
            name: "Jane Smith"
        },
        doctor: [
            {
                id: "7",
                name: "Dr. John Williams",
                department: "Hematology"
            },
        ],
        department: "Hematology"
    },
    {
        journal: {
            socialSecurityNumber: 5678901234,
            name: "John Johnson"
        },
        doctor: [
            {
                id: "9",
                name: "Dr. John Brown",
                department: "Cardiology"
            },
        ],
        department: "Cardiology"
    }
];
    