import E1 from '../../assets/e31.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },

]


export default function Head() {
  return (
    <Disclosure as="nav" className="bg-indigo-300 rounded-br-3xl rounded-bl-3xl ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">
             
              <div id='navb1' className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-96 pl-40">
              <a href='/'> <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-11 w-44"
                  src={E1}
                    alt="E-license"
                  />
                </div></a>
               
              </div>
              
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}