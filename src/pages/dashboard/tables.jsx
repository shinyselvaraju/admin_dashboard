import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  Dialog
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import { Chats } from "@/pages/dashboard/chats";
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Tables() {

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    axios.get('http://localhost:8081/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <React.Fragment>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        children=<Chats></Chats>
      > 
      </Dialog>

      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              User Data <Link to="/dashboard/create"><Button className="rounded-full bg-white text-black">+</Button></Link>
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Name", "Pos", "Status", "", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (itm, key) => {
                    const className = `py-3 px-5 ${key === data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={itm.name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {itm.name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {itm.email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {itm.city}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {itm.city}
                          </Typography>
                        </td>
                        {/* <td className={className}>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "online" : "offline"}
                            className="py-0.5 px-2 text-[11px] font-medium"
                          />
                        </td> */}
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            <Button className="rounded-full bg-white text-red">Delete</Button>
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            <Button className="rounded-full bg-white text-black">Edit</Button>
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            <Button className="rounded-full bg-white text-black" onClick={handleOpen}>Chats</Button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Tables;
