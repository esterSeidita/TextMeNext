import MessageList from "../../components/MessageList";
import MainLayout from "../../components/MainLayout";

export default function Message() {
  return (
    <MainLayout>
      <h1>Messaggi:</h1>
      <MessageList />
    </MainLayout>
  );
}
