import { React, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contacts, setContacts] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setContacts([...contacts, { name, mobile }]); //addnewcontact
    setName("");
    setMobile("");
  }

  return (
    // main container
    <div className="min-h-screen bg-[#5B0E14] flex justify-center">
      <div className="flex gap-20 w-[80%] max-w-5xl items-center">
        {/*form card*/}
        <div className="w-1/2 bg-[#F1E194] rounded-xl p-8 h-96">
          <h2 className="text-4xl font-extrabold text-[#5B0E14] mb-6 ">
            ADD TO CONTACTS
          </h2>

          <form
            onSubmit={submitHandler}
            className=" text-[#F1E194] flex mt-10 flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Enter name"
              required
              value={name} //controlled input
              onChange={(e) => {
                setName(e.target.value); //update name
              }}
              className="bg-[#5B0E14] text-[#F1E194] font-bold px-6 py-4 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              required
              value={mobile} //controlled input
              onChange={(e) => {
                setMobile(e.target.value); //update mobile
              }}
              className="bg-[#5B0E14] text-[#F1E194] font-bold px-6 py-4 rounded-lg outline-none"
            />

            <button className="bg-[#5B0E14] py-2 mt-7 text-xl rounded-lg font-extrabold text-[#F1E194]">
              SAVE
            </button>
          </form>
        </div>

        {/*contact list card*/}
        <div className="w-1/2 h-8/12 bg-[#F1E194] rounded-xl p-6 flex flex-col">
          <h2 className="text-3xl text-[#5B0E14] font-extrabold mb-4">
            CONTACTS
          </h2>

          <div className="flex flex-col gap-3 mt-2 overflow-y-auto pr-2 custom-scroll flex-1">
            {/*scrollablelist*/}
            {contacts.length === 0 ? ( //checkifempty
              <p className="text-[#5B0E14] text-center mt-52">
                No contacts added
              </p>
            ) : (
              contacts.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-[#5B0E14] text-[#F1E194] p-4 rounded-lg flex justify-between items-center "
                  >
                    <div>
                      <h3 className="font-bold text-lg">{elem.name}</h3>
                      <h3 className="text-[#f1e19444]">{elem.mobile}</h3>
                    </div>

                    <span className="text-2xl mr-4 cursor-pointer">🡽</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
