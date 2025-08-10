import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom"; // correct import
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router";

const countries = [
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "Africa", value: "Africa" },
  { label: "India", value: "India" },
  { label: "Nigeria", value: "Nigeria" },
  { label: "Zimbabwe", value: "Zimbabwe" },
];

// Donation Card
function DonationCard({ donation }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col">
      <img
        src={donation.image}
        alt={donation.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 font-bold text-lg">{donation.title}</h3>
      <p className="text-sm text-gray-600">{donation.category}</p>
      <div className="mt-2">
        <p>
          Raised: <strong>{donation.raised}</strong> / Goal: <strong>{donation.goal}</strong>
        </p>
        <p>Progress: {donation.progress_percent}%</p>
      </div>
    </div>
  );
}

const Donations = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch donations on country change
  useEffect(() => {
    setLoading(true);
    fetch(`https://volunteer-servers.vercel.app//donations?country=${selectedCountry}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch(() => {
        setDonations([]);
        setLoading(false);
      });
  }, [selectedCountry]);

  return (
    <div>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.ibb.co.com/0jLm2H3z/portrait-young-viking-children.jpg"
          alt="FAQ Header"
          className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Donations
          </h1>

          <nav className="text-sm md:text-base text-white drop-shadow">
            <Link to="/" className="text-accent font-semibold">
              HOME
            </Link>

            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;

              return (
                <span key={name}>
                  {" › "}
                  {isLast ? (
                    <span className="text-[#add2a7] font-semibold uppercase">{name}</span>
                  ) : (
                    <Link to={routeTo} className="text-[#add2a7] font-semibold uppercase">
                      {name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tabs with donations */}
      <div className="mt-8 px-4 md:px-10">
        <Tabs value={selectedCountry} onChange={setSelectedCountry}>
          <TabsHeader>
            {countries.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody>
            {countries.map(({ value }) => (
              <TabPanel key={value} value={value}>
                {loading ? (
                  <p>Loading donations...</p>
                ) : donations.length === 0 ? (
                  <p>No donations found for {value}</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                      <DonationCard key={donation._id} donation={donation} />
                    ))}
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Donations;
