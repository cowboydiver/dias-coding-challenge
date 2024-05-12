import { Department } from "./department";

export type Doctor = {
    id: string;
    name: string;
    department: Department;
};

// make a static list of doctors
export const DOCTORS: Doctor[] = [
    {
        id: "1",
        name: "Dr. John Doe",
        department: "Cardiology"
    },
    {
        id: "2",
        name: "Dr. Jane Doe",
        department: "Neurology"
    },
    {
        id: "3",
        name: "Dr. John Smith",
        department: "Oncology"
    },
    {
        id: "4",
        name: "Dr. Jane Smith",
        department: "Pediatrics"
    },
    {
        id: "5",
        name: "Dr. John Johnson",
        department: "Psychiatry"
    },
    {
        id: "6",
        name: "Dr. Jane Johnson",
        department: "Surgery"
    },
    {
        id: "7",
        name: "Dr. John Williams",
        department: "Hematology"
    },
    {
        id: "8",
        name: "Dr. Jane Williams",
        department: "Infectious Disease"
    },
    {
        id: "9",
        name: "Dr. John Brown",
        department: "Cardiology"
    },
    {
        id: "10",
        name: "Dr. Jane Brown",
        department: "Neurology"
    },
    {
        id: "11",
        name: "Dr. John Davis",
        department: "Oncology"
    },
    {
        id: "12",
        name: "Dr. Jane Davis",
        department: "Pediatrics"
    },
    {
        id: "13",
        name: "Dr. John Miller",
        department: "Psychiatry"
    },
    {
        id: "14",
        name: "Dr. Jane Miller",
        department: "Surgery"
    },
    {
        id: "15",
        name: "Dr. John Wilson",
        department: "Hematology"
    },
    {
        id: "16",
        name: "Dr. Jane Wilson",
        department: "Infectious Disease"
    },
    {
        id: "17",
        name: "Dr. John Brown",
        department: "Cardiology"
    },
    {
        id: "18",
        name: "Dr. Jane Brown",
        department: "Neurology"
    },
];