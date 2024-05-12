import DefaultPageLayout from "@/components/DefualtPageLayout";
import ListContainer from "@/components/ListContainer";
import ListItem from "@/components/ListItem";
import { JOURNALS } from "@/types/journal";

export default function Journals() {
  return (
    <DefaultPageLayout header="Journals">
      <ListContainer>
        {Object.values(JOURNALS).map((journal, index) => (
          <ListItem key={index} data={journal} /> 
        ))}
      </ListContainer>
    </DefaultPageLayout>
  );
}
