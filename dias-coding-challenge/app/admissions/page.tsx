import DefaultPageLayout from "@/components/DefualtPageLayout";
import ListContainer from "@/components/ListContainer";
import ListItem from "@/components/ListItem";
import { ADMISSIONS, Admission } from "@/types/admission";
import { Doctor } from "@/types/doctor";

function processAdmission(admission: Admission) {
  return {
    id: admission.journal.socialSecurityNumber,
    name: admission.journal.name,
    department: admission.department,
    doctors: admission.doctor?.map((doctor: Doctor) => doctor.name).join(", ")
  };
}

export default function Journals() {
  return (
    <DefaultPageLayout header="Admissions">
      <ListContainer>
        {Object.values(ADMISSIONS).map((admission, index) => (
          <ListItem key={index} data={
            processAdmission(admission)
          } /> 
        ))}
      </ListContainer>
    </DefaultPageLayout>
  );
}
