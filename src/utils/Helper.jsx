import { toast } from "react-toastify";

export const url = import.meta.env.VITE_APP_API_ENDPOINT || "";
//GET LOCAL STORAGE ITEM
export const getLocalStorageItem = (key) => localStorage.getItem(key);
//SET VALUE TO LOCAL STORAGE
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);
//REMOVE ITEM FROM LOCALSTORAGE
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
//GET DEFAULT VALUES USING LOCALSTORAGE
export const getDefaultState = (keyName) => {
  const storedValue = localStorage.getItem(keyName);
  if (storedValue !== null && storedValue !== undefined) {
    try {
      const value = JSON.parse(storedValue);
      return value;
    } catch (error) {
      return storedValue;
    }
  } else {
    console.error("Value is undefined or null in localStorage");
    return null;
  }
};

export const notifySuccess = (message) => {
  toast.dismiss();
  toast.success(message);
};

export const notifyWarning = (message) => {
  toast.dismiss();
  toast.warning(message);
};

export const notifyError = (message) => {
  toast.dismiss();
  toast.error(message);
};

export const getSelectedBetTypeDigits = (bet_type) => {
  let digits = null;
  if (bet_type === "Single") {
    digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  } else if (bet_type === "Single Patti") {
    digits = [
      "128",
      "137",
      "146",
      "236",
      "245",
      "290",
      "380",
      "470",
      "489",
      "560",
      "678",
      "579",
      "129",
      "138",
      "147",
      "156",
      "237",
      "246",
      "345",
      "390",
      "480",
      "570",
      "679",
      "589",
      "120",
      "139",
      "148",
      "157",
      "238",
      "247",
      "256",
      "346",
      "490",
      "580",
      "670",
      "689",
      "130",
      "149",
      "158",
      "167",
      "239",
      "248",
      "257",
      "347",
      "356",
      "590",
      "680",
      "789",
      "140",
      "159",
      "168",
      "230",
      "249",
      "258",
      "267",
      "348",
      "357",
      "456",
      "690",
      "780",
      "123",
      "150",
      "169",
      "178",
      "240",
      "259",
      "268",
      "349",
      "358",
      "457",
      "367",
      "790",
      "124",
      "160",
      "179",
      "250",
      "269",
      "278",
      "340",
      "359",
      "368",
      "458",
      "467",
      "890",
      "125",
      "134",
      "170",
      "189",
      "260",
      "279",
      "350",
      "369",
      "378",
      "459",
      "567",
      "468",
      "126",
      "135",
      "180",
      "234",
      "270",
      "289",
      "360",
      "379",
      "450",
      "469",
      "478",
      "568",
      "127",
      "136",
      "145",
      "190",
      "235",
      "280",
      "370",
      "479",
      "460",
      "569",
      "389",
      "578",
    ];
  } else if (bet_type === "Double Patti") {
    digits = [
      "100",
      "119",
      "155",
      "227",
      "335",
      "344",
      "399",
      "588",
      "669",
      "110",
      "200",
      "228",
      "255",
      "336",
      "499",
      "660",
      "688",
      "778",
      "166",
      "229",
      "300",
      "337",
      "355",
      "445",
      "599",
      "779",
      "788",
      "112",
      "220",
      "266",
      "338",
      "400",
      "446",
      "455",
      "699",
      "770",
      "113",
      "122",
      "177",
      "339",
      "366",
      "447",
      "500",
      "799",
      "889",
      "114",
      "277",
      "330",
      "448",
      "466",
      "556",
      "600",
      "880",
      "899",
      "115",
      "133",
      "188",
      "223",
      "377",
      "449",
      "557",
      "566",
      "700",
      "116",
      "224",
      "233",
      "288",
      "440",
      "477",
      "558",
      "800",
      "990",
      "117",
      "144",
      "199",
      "225",
      "388",
      "559",
      "577",
      "667",
      "900",
      "118",
      "226",
      "244",
      "299",
      "334",
      "488",
      "550",
      "668",
      "677",
    ];
  } else if (bet_type === "Triple Patti") {
    digits = [
      "000",
      "111",
      "222",
      "333",
      "444",
      "555",
      "666",
      "777",
      "888",
      "999",
    ];
  } else if (bet_type === "Jodi") {
    digits = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
    ];
  }
  return digits;
};

export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

export const getWeekOptions = (noOfWeeks) => {
  let arr = [];
  const today = new Date();

  for (let i = noOfWeeks; i >= 1; i--) {
    // Start from previous week
    const weekStartDate = new Date(today);
    weekStartDate.setDate(today.getDate() - i * 7 - today.getDay());
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekStartDate.getDate() + 6);
    const options = { day: "numeric", month: "long" };

    weekStartDate.setHours(0, 0, 0, 0);
    weekEndDate.setHours(23, 59, 59, 999);

    const label =
      weekStartDate?.toLocaleDateString("en-US", options) +
      " - " +
      weekEndDate?.toLocaleDateString("en-US", options);

    let obj = { label: label, value: { weekStartDate, weekEndDate } };
    arr.push(obj);
  }

  return arr.reverse();
};
