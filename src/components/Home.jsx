import React from "react";
import TaAssist from "./TaAssist"

import "./Home.css";

const Home = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.history.push(`/subjects`);
  };

  return (
    <div className="home">
      <TaAssist goToSubjects={handleClick} />
      <div className="svg-container">
        <svg
          id="a1abe23f-2807-4f9c-a5d8-6f58febb0620"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 859.47557 522.35332"
        >
          <polygon
            points="859.08 522.353 0 522.353 0 520.172 859.476 520.172 859.08 522.353"
            fill="#3f3d56"
          />
          <path
            d="M920.40867,364.2246l-21.73913,43.0372-65.00091,29.55031c-6.94151,11.7311-28.99936,12.629-30.60352,5.04275-1.79962-8.51058,26.78569-22.20865,26.78569-22.20865L884.219,382.87267l4.757-31.65725Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <polygon
            points="747.582 464.215 751.591 496.288 728.338 497.892 725.933 464.215 747.582 464.215"
            fill="#a0616a"
          />
          <path
            d="M914.63679,680.3009a62.964,62.964,0,0,0,5.73784-7.017c3.33247-4.61149,6.28944,19.04434,6.28944,19.04434s3.20727,9.6218,2.40545,14.43278-19.24374,4.811-22.451,4.00912-19.24371,0-19.24371,0H863.32016c-20.84735-9.62181,0-16.03641,0-16.03641,6.41457-.80178,28.06376-20.84738,28.06376-20.84738l4.81094-8.82c3.20727-.80185,6.41457,11.22551,6.41457,11.22551Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <polygon
            points="807.718 464.616 811.728 496.689 788.475 498.293 786.069 464.616 807.718 464.616"
            fill="#a0616a"
          />
          <path
            d="M974.7734,680.70176a62.96609,62.96609,0,0,0,5.73785-7.017c3.33247-4.6115,6.28944,19.04434,6.28944,19.04434s3.2073,8.82,2.40545,13.631-19.24374,4.8109-22.451,4.00912-19.24371.80185-19.24371.80185H923.45677c-20.84734-9.6218,0-16.03641,0-16.03641,6.41457-.80185,28.06377-20.84737,28.06377-20.84737l4.81093-8.82c3.20731-.80185,6.41457,11.22551,6.41457,11.22551Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M951.5205,446.57c3.2073,4.00905,1.60367,17.64,1.60367,17.64s5.61275,44.10039,3.2073,48.10951,1.60364,7.21638,4.00912,12.82914,4.81094,19.24374,4.81094,19.24374c13.631,11.22544,12.82914,62.542,12.82914,62.542l4.81094,45.70381c-1.60364,4.8109-24.05462,5.61275-27.26192,4.8109s-12.82914-72.96579-12.82914-72.96579l-21.64919-40.89291s1.60363,109.04773,1.60363,113.8587-21.64916,2.40548-26.4601,2.40548-4.81093-80.18218-4.81093-80.18218L886.573,558.82511,860.91474,463.4083V452.1828l4.00908-5.61276S948.3132,442.561,951.5205,446.57Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <circle cx="745.97819" cy="50.87672" r="24.85646" fill="#a0616a" />
          <path
            d="M903.81214,251.32646c5.03845,11.21948,2.05506,26.89026-8.01821,44.10021L936.68684,276.183l-6.41457-5.61275,1.60363-16.03645Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <path
            d="M903.81221,276.98488c-5.355,3.18357-8.55834,9.03293-10.39721,14.98518a142.00887,142.00887,0,0,0-6.10241,33.92893l-1.94228,34.4753-24.05464,91.40765c20.84734,17.64,32.87473,13.631,60.93843-.80185s31.271,4.8109,31.271,4.8109,2.40548-.80178,0-3.20727,0,0,2.40545-2.40548,0,0-.80182-2.40549,0-.80178.80182-1.60363-3.20727-8.01824-3.20727-8.01824l6.41457-60.13665,8.0182-84.993c-9.62187-12.02732-36.88378-22.451-36.88378-22.451L905.4158,288.21025c-8.0182,3.20726-1.60363-9.62188-1.60363-9.62188Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#f57b51"
          />
          <path
            d="M980.38616,343.93678l3.20726,48.10929-40.8929,58.533c0,13.631-7.21639,16.83826-7.21639,16.83826a105.99109,105.99109,0,0,1-7.21639-13.631c-4.00912-8.82,2.40545-16.03641,2.40545-16.03641l28.06373-59.3348L946.7096,348.74779Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <path
            d="M966.75509,293.42207c13.631,4.81091,16.03645,56.92932,16.03645,56.92932-16.03645-8.82-35.28016,5.61275-35.28016,5.61275s-4.00905-13.63092-8.82-31.271a30.64413,30.64413,0,0,1,6.41457-28.86558S953.1241,288.61117,966.75509,293.42207Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#f57b51"
          />
          <path
            d="M939.09229,247.31734c-3.16431-2.5315-7.48122,2.07-7.48122,2.07l-2.53146-22.78327s-15.82173,1.89865-25.94762-.63285-11.70807,9.17658-11.70807,9.17658a81.263,81.263,0,0,1-.31643-14.23954c.63285-5.69581,8.86012-11.39165,23.41612-15.18885S936.674,218.37678,936.674,218.37678C946.79992,223.43974,942.2566,249.84884,939.09229,247.31734Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M210.66516,581.88577C213.398,592.73415,236.7007,617.131,260.74569,640.04c-37.07942-91.58625-15.95016-191.82017-15.95016-191.82017C237.91069,487.586,332.269,685.68963,332.269,685.68963l-21.49153,12.67285-7.2601,10.21639C230.73837,675.153,210.66516,581.88577,210.66516,581.88577Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#e6e6e6"
          />
          <rect
            x="363.48742"
            y="189.97214"
            width="303.97081"
            height="60.01475"
            fill="#e6e6e6"
          />
          <rect
            x="363.48742"
            y="95.14215"
            width="303.97081"
            height="60.01474"
            fill="#e6e6e6"
          />
          <rect
            x="363.48742"
            width="303.97081"
            height="60.01474"
            fill="#e6e6e6"
          />
          <path
            d="M540.22968,242.35774H831.24052v-47.0542H540.22968Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#fff"
          />
          <path
            d="M540.22968,337.70921H831.24052V290.655H540.22968Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#fff"
          />
          <path
            d="M540.22963,432.33H831.24046v-47.0542H540.22963Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#fff"
          />
          <circle cx="395.44331" cy="29.61767" r="17.92647" fill="#f57b51" />
          <rect
            x="438.31099"
            y="22.60296"
            width="176.92656"
            height="3.89706"
            fill="#f57b51"
          />
          <rect
            x="438.31099"
            y="32.73531"
            width="176.92656"
            height="3.89706"
            fill="#f57b51"
          />
          <circle cx="395.44331" cy="125.53922" r="17.92647" fill="#ccc" />
          <rect
            x="438.31099"
            y="118.52452"
            width="176.92656"
            height="3.89706"
            fill="#ccc"
          />
          <rect
            x="438.31099"
            y="128.65687"
            width="176.92656"
            height="3.89706"
            fill="#ccc"
          />
          <circle cx="395.44331" cy="220.36924" r="17.92648" fill="#ccc" />
          <rect
            x="438.31099"
            y="213.35452"
            width="176.92656"
            height="3.89706"
            fill="#ccc"
          />
          <rect
            x="438.31099"
            y="223.48689"
            width="176.92656"
            height="3.89706"
            fill="#ccc"
          />
          <path
            d="M309.641,361.94122s-4.19117,26.34459,13.1723,23.9496c0,0,68.85517-15.56725,72.44762-11.9748s25.92634,4.81534,24.7613-10.3301c-1.169-15.19657-23.56381-6.43465-23.56381-6.43465s-34.727,4.78991-41.91184,1.19746-27.54206-2.395-27.54206-2.395Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <path
            d="M362.18571,447.85313l-9.54746,90.58677s-2.99372,35.92448-11.97481,43.70811c0,0,0,11.37607-2.99371,14.96852L333.47855,644.417s5.9874,17.36351,5.38867,20.35723,2.395,12.57353,1.79622,13.77106-28.73954,0-28.73954,0l5.9874-96.39722,18.561-134.11789Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M309.73046,673.64837s-12.55671,31.66476-6.00539,35.48631,75.34022,1.09187,75.34022,1.09187,11.46482-7.09729-1.63783-12.01079c0,0-10.91889-.546-18.01607-4.91349S344.125,680.74552,344.125,680.74552s-.54593-12.01078-4.91349-9.281a11.21978,11.21978,0,0,0-4.91349,7.64319Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M290.36925,669.3548s-13.771,34.727-6.58614,38.91813,82.62623,1.19746,82.62623,1.19746,12.57357-7.78363-1.79622-13.17227c0,0-11.9748-.59873-19.75843-5.38863S328.09,677.13843,328.09,677.13843s-.59873-13.17234-5.38867-10.17862a12.30475,12.30475,0,0,0-5.38868,8.38243Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M346.05219,446.62325s-6.58613,61.67027-9.57985,74.8426a170.28923,170.28923,0,0,0-3.59245,26.3446s-.59873,19.15969-5.9874,24.5484a16.18315,16.18315,0,0,0-4.78994,11.9748s-5.38868,60.47282-2.395,67.65771,7.05779,16.51925,4.06415,21.30915-36.99487,1.443-36.99487-2.14945,0-6.58617-1.79623-8.38243,0-13.17226,0-13.17226-7.18489-53.28791-.59872-68.85516,9.57984-58.07783,9.57984-58.07783-4.7899-48.498-10.77734-56.28163,1.1975-35.32568,1.1975-35.32568Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#2f2e41"
          />
          <path
            d="M329.19529,255.11046c.696,1.5856,2.3621,2.46852,3.87887,3.30411,8.79065,4.84295,16.149,11.86444,23.39869,18.805a27.46861,27.46861,0,0,1,1.08991-18.57615c.86563-2.00443,2-4.159,1.38131-6.25281a7.78423,7.78423,0,0,0-3.03617-3.63266,94.1333,94.1333,0,0,0-9.25919-6.31713c-2.24186-1.34124-6.851-4.91179-9.42366-4.52325-.135,3.476-.20557,6.58371-1.72775,9.83242C335.13618,248.52063,329.46134,255.71666,329.19529,255.11046Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <circle cx="189.56096" cy="49.43813" r="24.54837" fill="#a0616a" />
          <path
            d="M361.02067,296.33931s4.19118-20.95592-7.78359-28.14081-25.7459-15.56726-25.7459-15.56726-4.19117-.59872-5.9874,8.38243c0,0-34.12822,6.58613-37.72067,38.91816s2.395,79.63251,2.395,79.63251-5.38867,41.31312-11.9748,63.46653c0,0-5.38868,4.78991,18.561-2.395S358.62572,460.993,358.62572,460.993s4.19118-4.19118,4.19118-7.18489,8.98108-94.00227,10.7773-102.38466S366.40934,297.53681,361.02067,296.33931Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#e6e6e6"
          />
          <path
            d="M354.03772,240.79041a10.23692,10.23692,0,0,1,4.81451-1.28222,9.16212,9.16212,0,0,0,4.76257-1.4191c2.31887-1.78019,2.489-5.22065,4.18534-7.60152,2.456-3.447,7.35552-3.86191,11.5845-3.68944,2.58658.10549,5.37213.26,7.55024-1.139,2.23607-1.43621,3.2496-4.14222,4.0036-6.69059.89162-3.01359,1.46831-6.69894-.74109-8.934-1.53426-1.552-3.956-1.859-5.66037-3.222-.92241-.7377-13.11551-3.69989-24.56211-6.36336a23.92481,23.92481,0,0,0-27.90457,15.14442c-2.64308,7.26774-4.90826,14.09663-4.67444,15.57173,1.119,7.05935,7.36209,12.67067,7.79226,19.80522a12.15791,12.15791,0,0,1,7.42087-8.82419,2.32233,2.32233,0,0,1,1.512-.18342c.62024.19825.98278.81792,1.3742,1.33832,1.02562,1.3635,4.24756,3.43221,6.0739,2.46493C353.20316,244.90063,351.98323,242.18381,354.03772,240.79041Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#3f3d56"
          />
          <path
            d="M365.26323,369.85386a2.73068,2.73068,0,0,0-.05576,3.84244l17.262,17.86609a2.72463,2.72463,0,0,0,3.88187.03749l52.67412-52.44595a2.72488,2.72488,0,0,0-.43553-4.21387l-20.71254-13.4907a2.70873,2.70873,0,0,0-3.39071.33375Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#3f3d56"
          />
          <path
            d="M439.38665,335.73675a2.74293,2.74293,0,0,1-.36116.44482l-52.55027,53.43674a2.72465,2.72465,0,0,1-3.88187-.0375l-17.63357-18.60917a2.71325,2.71325,0,0,1-.32224-.40633,2.44512,2.44512,0,0,0,.56993,3.131l17.262,17.86609a2.72463,2.72463,0,0,0,3.88187.03749l52.67412-52.44595a2.72564,2.72564,0,0,0,.36116-3.41718Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#f57b51"
          />
          <path
            d="M434.50957,336.38313l-2.14352-1.36668a2.04231,2.04231,0,0,1-2.93941,2.68153l-13.871-9.53632a2.04107,2.04107,0,0,1,.53965-3.62891l-1.10436-.70412a.74311.74311,0,0,0-.92807.10427l-46.66308,45.85718a.74308.74308,0,0,0,.01881,1.063l16.94689,16.51283a.7431.7431,0,0,0,1.03435-.01436l49.23484-49.8155A.74309.74309,0,0,0,434.50957,336.38313Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#fff"
          />
          <polygon
            points="210.391 170.841 224.706 184.338 258.754 150.698 241.474 139.451 210.391 170.841"
            fill="#e6e6e6"
          />
          <path
            d="M427.69324,347.82343a.50745.50745,0,0,0,.70064,0l2.97756-2.9775a.49617.49617,0,0,0,0-.70058.50745.50745,0,0,0-.70064,0l-2.97756,2.9775a.49618.49618,0,0,0,0,.70058Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#3f3d56"
          />
          <path
            d="M422.67739,352.83935a.49624.49624,0,0,0,.70064,0l2.97756-2.97756a.49543.49543,0,0,0-.70064-.70064l-2.97756,2.97756A.49613.49613,0,0,0,422.67739,352.83935Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#3f3d56"
          />
          <circle cx="210.72159" cy="182.42611" r="3.3439" fill="#f57b51" />
          <path
            d="M292.16547,352.621s-4.19118,26.34459,13.1723,23.9496c0,0,68.85516-15.56725,72.44761-11.9748s25.92634,4.81534,24.76131-10.3301c-1.169-15.19657-23.56381-6.43464-23.56381-6.43464s-34.727,4.7899-41.91185,1.19745-27.54205-2.395-27.54205-2.395Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#a0616a"
          />
          <path
            d="M316.71384,269.396s-26.94329,2.99372-26.94329,41.91184V361.0033l32.93076-13.771s13.771-32.332,12.57357-41.31311S334.67608,270.59345,316.71384,269.396Z"
            transform="translate(-170.26222 -188.82334)"
            fill="#e6e6e6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;