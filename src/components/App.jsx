// import Header from "./Header/Header";
// import Body from "./Body/Body";
// import Message from "./Message/Message";
// import Footer from "./Footer/Footer";

import Profile from "./Profile/Profile";
// import FriendList from "./FriendList/FriendList";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../userData";

const App = () => {
  // const message = "Hello!";
  // const isOnline = true;
  // const age = 21;
  // const fruits = ["banana", "aple", "lemon"];

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* <FriendList />
      <TransactionHistory /> */}
    </>

    // <main>
    //   <Header />
    //   <Body />
    //   <Message autor="Htnhj" message={message} value={[1, 2, 3]} />
    //   <Message
    //     autor="Ghjkfgyh"
    //     message="fghbnhgf yhjhghjhghj fgbhnbfgbhgfdf lkjhbnjk lkjhk pokjh"
    //   />
    //   <Message message="fghjkl;lkmjhgfgyhujkl;';lkjhgfghujikol;'" />

    //   {isOnline && <h1>Welcome</h1>}
    //   {!isOnline && <h1>Login</h1>}
    //   {age >= 18 ? <h1>Welcome</h1> : <h1>Login</h1>}

    //   <ul>
    //     {fruits.map((item) => (
    //       <li key={item}>{item}</li>
    //     ))}
    //   </ul>

    //   <Footer />
    // </main>
  );
};

export default App;
