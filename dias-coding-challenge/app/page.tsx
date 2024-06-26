import DefaultPageLayout from "@/components/DefualtPageLayout";
import ListContainer from "@/components/ListContainer";
import ListItem from "@/components/ListItem";
import { DOCTORS } from "@/types/doctor";

export default function Home() {
  return (
    <DefaultPageLayout header="Doctors">
      <ListContainer>
        {Object.values(DOCTORS).map((doctor, index) => (
          <ListItem key={index} data={doctor} /> 
        ))}
      </ListContainer>
    </DefaultPageLayout>
  );
}
