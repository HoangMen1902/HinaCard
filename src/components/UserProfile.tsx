export const UserProfile = () => {
  return (
    <div className="w-[50rem] rounded-lg bg-white p-12 flex gap-x-4 font-poppins">
      <img
        src="https://cdn.discordapp.com/attachments/1153530045764206623/1217467108355477524/CuteHina.png?ex=6604219a&is=65f1ac9a&hm=81333a133dba77e4b49dcc4721ccadf6c34ae1bd4e21333cb0d6c2fc8e890a3d&"
        className=" w-32 rounded-full border-[11px] border-[#E6EFFA] self-start"
      />
      <div className="space-y-7 text-sky-800">
        <div>
          <h1 className="text-3xl font-bold">Sorasaki Hina</h1>
          <h2 className=" mt-1">Prefect Team</h2>
        </div>
        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Age 17
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>
            Birthday 19th Feb
          </p>
          <p>
            {" "}
            <img
              src="https://cdn.discordapp.com/attachments/1153530045764206623/1217473416290893895/MG_Icon.png?ex=6604277a&is=65f1b27a&hm=dfd2b6436f47081078cd200977a1aaa82cb2d1c532a70069538d5edd28acc40b&"
              alt="Hina's weapon"
              className=" w-12  mr-1 inline-block"
            />
            Weapon The End: Destroyer
          </p>
        </div>
        <div>
          <p className="text-lg text-justify">
            The president of the Disciplinary committee of Gehenna that is
            feared by everyone. She's a lazy person but she gets serious when it
            comes to following the school rules. She's always saying things like
            "How troublesome" but acts calmly and quickly on the battlefield
            without hesitation. Because of how astonishing her power is,
            organizations hostile to Gehenna are afraid of her on the
            battlefield.
          </p>
        </div>
        <button className="p-2 rounded-md border-2 border-[#0ea5e9] bg-[#0ea5e9] 	text-white outline-none">
          Show more
        </button>
      </div>
    </div>
  );
};
