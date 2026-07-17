interface MailboxProps {
  username: string;
  messages: string[];
  unreadMessages: string[];
}

export default function Mailbox({
  username,
  messages,
  unreadMessages,
}: MailboxProps) {
  return (
    <div className="mailBox" style={{ outline: "1px solid red" }}>
      <h3>Hello {username}</h3>

      <hr style={{ width: "25%" }} />

      {messages.length > 0 && <p>You have {messages.length} unread messages</p>}

      <hr style={{ width: "25%" }} />

      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>

      <hr style={{ width: "25%" }} />
      
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
}
