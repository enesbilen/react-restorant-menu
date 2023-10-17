export default function Header() {
  return (

      <div className="flex items-center flex-col justify-center mt-8">
        <div className="my-5">
          <svg viewBox="0 0 24 24" width={40} height={40}>
            <path 
            fill="currentColor"
            d="M17.761 10.491c-1.212.008-2.137-.126-2.898.849l-2.424 3.026-.635-.81 2.273-2.837c.752-.963.4-1.843.125-3.015-.268-1.136.342-1.604.79-2.069l4.607 3.599c-.346.565-.634 1.249-1.838 1.257zm-.569 12.406c-.124.097-.471.209-.702-.086l-8.22-10.386-1.839 1.437c-2.996-5.134-5.425-10.892-5.499-12.511l16.347 20.844c.17.218.131.532-.087.702zm-11.522-.094c-.17.217-.485.255-.706.083-.218-.172-.253-.482-.083-.7l4.956-6.172.639.804-4.806 5.985zm17.631-19.56l-3.163 5.146-1.055-.827 3.692-4.73-.788-.616-3.694 4.729-.791-.618 3.697-4.727-.789-.615-3.698 4.725-1.017-.795 4.163-4.359-.715-.562s-3.582 3.595-5.343 5.439c-.616.646-.776 1.629-.571 2.5.277 1.177.485 1.626.06 2.17l-2.119 2.647c-4.421-5.627-9.226-11.736-9.748-12.393-.181-.228-.428-.344-.673-.344-.824 0-.739.952-.739.979 0 2.415 2.985 9.192 6.143 14.353l1.943-1.519 1.102 1.385-5.105 6.36c-.51.652-.399 1.591.256 2.103.276.215.603.32.927.32.446 0 .887-.198 1.182-.576l4.656-5.798 4.589 5.806c.28.36.655.535 1.031.568.393.035.787-.084 1.074-.309.653-.51.769-1.453.259-2.106-.961-1.231-2.826-3.646-4.993-6.406l2.577-3.218c.432-.553.906-.457 2.117-.464.908-.006 1.855-.396 2.334-1.167 1.348-2.175 3.898-6.535 3.898-6.535l-.699-.546z"
             />
          </svg>
        </div>
        <h1 className="font-bold text-5xl text-[#fff]">Menü</h1>
      </div>
  );
}