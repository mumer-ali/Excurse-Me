import React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HomeForm({ values }) {
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  return (
    <>
      {/* Other devices start */}
      <div className="hidden lg:block">
        <div className="h-40 flex justify-start select-none mt-20">
          {/* Destination */}
          <div className="py-2 px-4 text-sm bg-white flex items-center">
            <div className="relative">
              <label className="text-gray-500">DESTINATION</label>
              <Select>
                <SelectTrigger className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 p-4">
                  <SelectValue value={values[0]} placeholder={values[0]} />
                </SelectTrigger>
                <SelectContent className="bg-white outline-none rounded-none select-none">
                  <SelectGroup>
                    {values.map((value) => (
                      <SelectItem
                        value={value}
                        className="cursor-pointer font-serif text-gray-800"
                      >
                        {value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Person */}
          <div className="py-2 px-4 text-sm bg-white flex items-center">
            <div>
              <label className="text-gray-500">PERSON</label>
              <br />
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer p-4"
              />
            </div>
          </div>
          {/* Check In */}
          <div className="py-2 px-4 text-sm bg-white flex items-center">
            <div>
              <label className="text-gray-500">CHECK IN</label>
              <br />
              <Popover>
                <PopoverTrigger>
                  <Button className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                    {inDate ? (
                      format(inDate, "PPP")
                    ) : (
                      <span className="text-gray-800">
                        <i className="fa-regular fa-calendar"></i> Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={inDate}
                    onSelect={setInDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {/* Check Out */}
          <div className="py-2 px-4 text-sm bg-white flex items-center">
            <div>
              <label className="text-gray-500">CHECK OUT</label>
              <br />
              <Popover>
                <PopoverTrigger>
                  <Button className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                    {outDate ? (
                      format(outDate, "PPP")
                    ) : (
                      <span className="text-gray-800">
                        <i className="fa-regular fa-calendar"></i> Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={outDate}
                    onSelect={setOutDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {/* Button */}
          <div className="py-3 px-6 text-lg bg-lightorange font-serif text-white rounded-r-xl flex items-center cursor-pointer">
            <div className="text-lg bg-lightorange font-serif text-white rounded-r-xl flex items-center hover:scale-110 transform transition-transform duration-500">
              <p className="inline-block mr-2">
                Book
                <br />
                Now
              </p>
              <i className="fa-solid fa-arrow-right inline-block ml-1"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Other devices end */}
      {/* Mobile devices start */}
      <div className="sm:hidden">
        <div className="w-60 bg-white absolute left-1/2 top-1/2 -right-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 rounded-xl select-none outline-none">
          <div className="bg-white h-6 rounded-xl"></div>
          {/* Destination */}
          <div className="text-xs flex justify-center items-center pl-2 pr-2 mt-1">
            <div>
              <label className="text-gray-500">DESTINATION</label>
              <Select>
                <SelectTrigger className="w-48 h-10 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 p-4">
                  <SelectValue value={values[0]} placeholder={values[0]} />
                </SelectTrigger>
                <SelectContent className="bg-white outline-none rounded-none select-none">
                  <SelectGroup>
                    <SelectLabel className="font-serif text-gray-800">
                      Europe
                    </SelectLabel>
                    {values.map((value) => (
                      <SelectItem
                        value={value}
                        className="cursor-pointer font-serif text-gray-800"
                      >
                        {value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Person */}
          <div className="text-xs flex justify-center items-center pl-2 pr-2 mt-1">
            <div>
              <label className="text-gray-500">PERSON</label>
              <br />
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-48 h-10 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 p-4 caret-transparent cursor-pointer"
              />
            </div>
          </div>
          {/* Check In */}
          <div className="text-xs flex justify-center items-center pl-2 pr-2 mt-1">
            <div>
              <label className="text-gray-500">CHECK IN</label>
              <br />
              <Popover>
                <PopoverTrigger>
                  <Button className="w-48 h-10 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                    {inDate ? (
                      format(inDate, "PPP")
                    ) : (
                      <span className="text-gray-800">
                        <i className="fa-regular fa-calendar"></i> Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={inDate}
                    onSelect={setInDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {/* Check Out */}
          <div className="text-xs flex justify-center items-center pl-2 pr-2 mt-1">
            <div>
              <label className="text-gray-500">CHECK OUT</label>
              <br />
              <Popover>
                <PopoverTrigger>
                  <Button className="w-48 h-10 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                    {outDate ? (
                      format(outDate, "PPP")
                    ) : (
                      <span className="text-gray-800">
                        <i className="fa-regular fa-calendar"></i> Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={outDate}
                    onSelect={setOutDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="bg-white h-6"></div>
          {/* Button */}
          <div className=" py-3 px-6 flex items-center justify-center text-md bg-lightorange font-serif text-white cursor-pointer rounded-b-xl">
            <div className="hover:scale-110 transform transition-transform duration-500">
              <p>
                Book Now<i className="fa-solid fa-arrow-right ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile devices end */}
      {/* Small and medium devices start */}
      <div className="hidden sm:flex lg:hidden">
        <div className="h-48 ">
          <div className="h-48">
            <div className="h-24 flex justify-start select-none mt-20">
              {/* Destination */}
              <div className="py-2 px-4 text-sm bg-white flex items-center">
                <div>
                  <label className="text-gray-500">DESTINATION</label>
                  <Select>
                    <SelectTrigger className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 p-4">
                      <SelectValue value={values[0]} placeholder={values[0]} />
                    </SelectTrigger>
                    <SelectContent className="bg-white outline-none rounded-none select-none">
                      <SelectGroup>
                        <SelectLabel className="font-serif text-gray-800">
                          Europe
                        </SelectLabel>
                        {values.map((value) => (
                          <SelectItem
                            value={value}
                            className="cursor-pointer font-serif text-gray-800"
                          >
                            {value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Person */}
              <div className="py-2 px-4 text-sm bg-white flex items-center">
                <div>
                  <label className="text-gray-500">PERSON</label>
                  <br />
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer p-4"
                  />
                </div>
              </div>
            </div>
            <div className="h-24 flex justify-start select-none">
              {/* Check In */}
              <div className="py-2 px-4 text-sm bg-white flex items-center">
                <div>
                  <label className="text-gray-500">CHECK IN</label>
                  <br />
                  <Popover>
                    <PopoverTrigger>
                      <Button className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                        {inDate ? (
                          format(inDate, "PPP")
                        ) : (
                          <span className="text-gray-800">
                            <i className="fa-regular fa-calendar"></i> Pick a
                            date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={inDate}
                        onSelect={setInDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              {/* Check Out */}
              <div className="py-2 px-4 text-sm bg-white flex items-center">
                <div>
                  <label className="text-gray-500">CHECK OUT</label>
                  <br />
                  <Popover>
                    <PopoverTrigger>
                      <Button className="w-48 h-12 bg-white outline-none rounded-none select-none border-0 font-serif text-gray-800 border-b-2 border-gray-700 caret-transparent cursor-pointer flex justify-start p-4">
                        {outDate ? (
                          format(outDate, "PPP")
                        ) : (
                          <span className="text-gray-800">
                            <i className="fa-regular fa-calendar"></i> Pick a
                            date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={outDate}
                        onSelect={setOutDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="bg-lightorange text-white text-lg font-serif h-48 w-32 mt-20 rounded-r-xl flex justify-center items-center">
          <div className="flex justify-center items-center hover:scale-110 transform transition-transform duration-500">
            <p className="inline-block mr-2">
              Book
              <br />
              Now
            </p>
            <i className="fa-solid fa-arrow-right inline-block ml-1"></i>
          </div>
        </div>
      </div>
      {/* Small and medium devices end */}
    </>
  );
}
