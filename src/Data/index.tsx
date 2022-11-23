import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './data.css'

export const data = [
    {
      stt: 1,
      name: "Gateway 1",
      serial: "38720ds1",
      province: "Ha Noi",
      status: "Kích hoạt",
      placement: "Co so 1",
      address: "Kim Giang, Thanh Xuan",
      action: <div className="action"> <FontAwesomeIcon className="icon" icon={faEye}/> <FontAwesomeIcon icon={faTrashCan} /></div>,
    },
    {
      stt: 2,
      name: "Gateway 2",
      serial: "38745ds2",
      province: "Ha Noi",
      status: "Chưa kích hoạt",
      placement: "Co so 1",
      address: "Kim Giang, Thanh Xuan",
      action: <div className="action"> <FontAwesomeIcon className="icon" icon={faEye}/> <FontAwesomeIcon icon={faTrashCan} /></div>,
    },
    {
      stt: 3,
      name: "Gateway 1",
      serial: "38745ds2",
      province: "Ha Noi",
      status: "Chưa kích hoạt",
      placement: "Co so 1",
      address: "Kim Giang, Thanh Xuan",
      action: <div className="action"> <FontAwesomeIcon className="icon" icon={faEye}/> <FontAwesomeIcon icon={faTrashCan} /></div>,
    },
  ];




