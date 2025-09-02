import { Cog, Home, House, Menu, Settings, User, UserCircleIcon } from "lucide-react";
const Attendance = () => {
  return (
    <div className="dashboard">
        <nav className="bg-[#212027] shadow-2xl flex justify-between sticky top-0 h-[72px] text-white px-6 py-2 items-center font-[1.4rem]">
           
              <div className="flex justify-center gap-2 items-center  ">
                <Home/>
                 <div className="font-medium ml-4.5">
                navigation
                </div>
                <Menu />
              </div>
              <div className="flex items-center justify-evenly gap-6 ">
                <Settings />
                <div className="flex justify-center items-center">
                  <div className="rounded-full w-12 h-12 border flex justify-center items-center overflow-hidden">
                    <UserCircleIcon  className="text-2xl"/>
                  </div>
                </div>
            </div>

        </nav>
        <aside className="
        sticky self-start top-[70.5px] pt-[2em] text-white font-[1.4rem] px-6 space-y-3.5 bg-[#161618]">
            <div className="flex flex-row gap-1 items-center w-full text-[1rem] ">
              <House/>
               home
            </div>
            <div className="flex flex-row gap-1 items-center w-full text-[1rem]"> 
              <User/>
              users
            </div>
            <div className="flex flex-row gap-1 items-center  w-full text-[1rem]">
              <Cog />
              settings
            </div>
        </aside>
        <main className="bg-[#212027]" >

          <div className="mx-auto w-[95%] pt-[2rem]">
            <div className=" bg-[#38363fad] shadow rounded-lg mb-2 w-full px-2 py-6">
              <ul className="flex flex-row gap-2 items-center justify-between text-[#030012] ">
                <li className="w-45 rounded-sm p-2 text-center border-0 bg-[#5a595f]">
                  200+
                  <p>user's</p>
                </li>
                 <li className="w-45 border-0 bg-[#5a595f] rounded-sm p-2 text-center">
                  2
                  <p>coming soon</p>
                </li>
                 <li className="w-45 border-0 rounded-sm text-center
                 p-2 bg-[#5a595f]">
                  3 clubs
                  <p>onboarded</p>
                </li>
              </ul>
            </div>
                     <div className="bg-[#322d387d] p-6 rounded-2xl w-full  shadow flex flex-wrap gap-6 my-3.5  max-w-[700px]">
               {/* Attendance Table */}
               <div className="flex-1 overflow-auto rounded-lg shadow">
                 <table className="w-full ">
                   <thead className="bg-gray-50 border-b-2 border-gray-200">
                     <tr>
                       <th className="p-3 text-sm font-semibold tracking-wide text-left whitepace-nowrap">username</th>
                       <th className="p-3 text-sm font-semibold tracking-wide text-left whitepace-nowrap">admision</th>
                       <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left whitepace-nowrap">club</th>
                       <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left whitepace-nowrap">date</th>
                       <th className="w-52 p-3 text-sm font-semibold tracking-wide text-left whitepace-nowrap">status</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="bg-gray-50">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">waren wanmo</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">dcs-05-0212/234</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">software development</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">2025/09/21</td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">present</td>
                     </tr>
                     <tr className="bg-white">
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">waren wanmo</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">dcs-05-0212/234</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">software development</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">2025/09/21</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">present</td>
                     </tr>
                     <tr className="bg-gray-50">
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">waren wanmo</td>
                     <td className="p-3 text-sm text-gray-700 whitespace-nowrap">dcs-05-0212/234</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">software development</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">2025/09/21</td>
                       <td className="p-3 text-sm text-gray-700 whitespace-nowrap">present</td>
                     </tr>
                  </tbody>
                 </table>
              </div>
              </div>
          </div>
        </main>
        <footer className="bg-gray-700">
          <div className="flex items-center font-light text-white  justify-center py-2 ">
            &copy; 2025  all rights reserved . made for techies by techies
          </div>
        </footer>
    </div>
  );
};

export default Attendance;
