"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { CgClose } from "react-icons/cg";

export default function JoinForm({
  setIsJoinFormActive,
  translation,
  alertMsgTranslation,
  isRTL,
  lang,
  services,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("none");
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsJoinFormActive(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const handleSubmit = async (e) => {
    const alertSuccess = document.getElementById("alertSuccess");
    const alertInternalError = document.getElementById("alertInternalError");
    const alertRequired = document.getElementById("alertRequired");
    e.preventDefault();
    if (name && email && phoneNumber && service !== "none" && comment) {
      setLoading(true);
      const data = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        service: service,
        comment: comment,
      };
      try {
        // await axios.post(
        //   "https://sheet.best/api/sheets/c59f4156-decd-4a3d-8ae5-3bd66abee932",
        //   data
        // );
        await axios.post("/api/mail", data);

        setLoading(false);
        alertSuccess.style.display = "block";
        setTimeout(() => {
          alertSuccess.style.display = "none";
        }, 3000);
      } catch (error) {
        console.log(error);
        setLoading(false);
        alertInternalError.style.display = "block";
        setTimeout(() => {
          alertInternalError.style.display = "none";
        }, 3000);
      }

      setName("");
      setEmail("");
      setComment("");
      setPhoneNumber("");
      setService("none");
    } else {
      alertRequired.style.display = "block";
      setTimeout(() => {
        alertRequired.style.display = "none";
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-[999999]">
      <div
        id="alertSuccess"
        dir={isRTL ? "rtl" : "ltr"}
        className="hidden fixed right-5 bottom-5 bg-green-500/60 text-white px-7 py-2 text-lg"
      >
        <span>{alertMsgTranslation?.success}</span>
      </div>
      <div
        id="alertInternalError"
        dir={isRTL ? "rtl" : "ltr"}
        className="hidden fixed right-5 bottom-5 bg-red-500/60 text-white px-7 py-2 text-lg"
      >
        <span>{alertMsgTranslation?.failed}</span>
      </div>
      <div
        id="alertRequired"
        dir={isRTL ? "rtl" : "ltr"}
        className="hidden fixed right-5 bottom-5 bg-red-500/60 text-white px-7 py-2 text-lg"
      >
        <span>{alertMsgTranslation?.inputsRequired}</span>
      </div>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        ref={wrapperRef}
        className="lg:w-[900px] sm:w-[700px] w-screen sm:h-[520px] h-screen bg-white sm:rounded-[40px] overflow-y-auto"
      >
        <div
          className={`w-full h-[100px] flex ${
            isRTL ? "justify-start" : "justify-end"
          }  items-center px-10`}
        >
          <button
            onClick={() => setIsJoinFormActive(false)}
            className="bg-[var(--primary-color)] text-white rounded-xl w-10 h-10 flex justify-center items-center"
          >
            <CgClose className="text-2xl" />
          </button>
        </div>

        {loading ? (
          <div className="w-full h-[350px] flex justify-center items-center">
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="var(--primary-color)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <form
            className="w-full h-fit flex flex-col justify-center items-center gap-5 p-5 lg:px-16 px-5"
            action=""
            onSubmit={handleSubmit}
          >
            {/* row */}
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:gap-10 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">
                  {translation?.fullName}:
                </label>
                <input
                  className="w-full outline-[var(--primary-color)] py-2 px-5 rounded-full bg-white text-[var(--primary-color)] border"
                  type="text"
                  placeholder={translation?.fullName}
                  required
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">
                  {translation?.email}:
                </label>
                <input
                  className="w-full outline-[var(--primary-color)] py-2 px-5 rounded-full bg-white text-[var(--primary-color)] border"
                  type="email"
                  placeholder={translation?.email}
                  required
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
            </div>

            {/* row */}
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:gap-10 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">
                  {translation?.phoneNumber}:
                </label>
                <input
                  className="w-full outline-[var(--primary-color)] py-2 px-5 rounded-full bg-white text-[var(--primary-color)] border"
                  type="text"
                  placeholder={translation?.phoneNumber}
                  required
                  value={phoneNumber}
                  onChange={({ target }) => setPhoneNumber(target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">
                  {translation?.service}:
                </label>

                <select
                  className=" w-full rounded-full py-2 px-5 outline-[var(--primary-color)] border"
                  name=""
                  id=""
                  required
                  value={service}
                  onChange={({ target }) => setService(target.value)}
                >
                  <option value="none" selected disabled>
                    {translation?.chooseService}
                  </option>
                  {services?.map((item, key) => (
                    <option key={key} value={item?.title?.ar}>
                      {lang === "ar"
                        ? item?.title?.ar
                        : lang === "en"
                        ? item?.title?.en
                        : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* row */}
            <div className="w-full grid grid-cols-1 gap-10">
              <div className="w-full flex flex-col gap-1">
                <label className="font-bold" htmlFor="">
                  {translation?.comment}:
                </label>
                <textarea
                  className="w-full outline-[var(--primary-color)] py-2 px-5 rounded-3xl bg-white text-[var(--primary-color)] border resize-none"
                  name=""
                  id=""
                  rows="2"
                  placeholder={translation?.comment}
                  required
                  value={comment}
                  onChange={({ target }) => setComment(target.value)}
                ></textarea>
              </div>
            </div>

            {/* row */}
            <div className="w-full flex justify-between gap-10 py-5">
              <div className="w-full flex justify-center gap-10">
                <button
                  type="button"
                  onClick={() => setIsJoinFormActive(false)}
                  className="w-[130px] h-[40px] rounded-full bg-tranparent text-[var(--primary-color)] border-[var(--primary-color)] border"
                >
                  {translation?.buttons?.close}
                </button>
                <button
                  type="submit"
                  className="w-[130px] h-[40px] rounded-full bg-[var(--primary-color)] text-white"
                >
                  {translation?.buttons?.send}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
