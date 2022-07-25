import Link from "next/link";
import React, { useState } from "react";

import Modal from 'react-modal';

import clsx from "clsx";
import { FilterIcon, FilterLessIcon } from "src/assets/Icons/Landing";

const classes = {
    root : "",
    collapseButton : "accordion-button relative flex items-center !shadow-none !bg-[#191315] after:bg-[url('/Vector.svg')]",
    collectionLink : 'border border-[#5CA4E2] p-[10px] pl-[30px] hover:bg-[#CECCCC] hover:bg-opacity-20 cursor-pointer',
    link : 'border border-[#707070] p-[10px] hover:bg-[#CECCCC] hover:bg-opacity-20 cursor-pointer',
    selectItem : 'bg-[#CECCCC] bg-opacity-20'
}

const  AdminSideBarDialog = (props) => {

    const {
        modalIsOpen,
        closeModal
    } = props;
    
    const [ type, setType ] = useState(null);
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            className="p-[0px] mt-[80px]"
            style={"bg-[none]"}
        >
                <div className='border rounded-[10px] border-[#707070] p-[10px] bg-[#474747] h-full'>
                    <div className='flex justify-end'>
                        { FilterIcon }
                    </div>
                    <div className='flex flex-col mt-[20px]'>

                        <div className='border border-[#5CA4E2] p-[10px]'>
                            COLLECTION
                        </div>
                        <Link href={'/Admin/CollectionCreate'}>
                            <div className={clsx(classes.collectionLink, type === "Add" && classes.selectItem)} onClick={() => setType("Add")}>
                                Add
                            </div>
                        </Link>
                        <Link href={'/Admin/CollectionEdit'}>
                            <div className={clsx(classes.collectionLink, type === "Edit" && classes.selectItem)} onClick={() => setType("Edit")}>
                                Edit
                            </div>
                        </Link>
                        <Link href={'/Admin/AttTraits'}>
                            <div className={clsx(classes.link, type === "Att" && classes.selectItem)} onClick={() => setType("Att")}>
                                        Attribute &amp; Traits
                            </div>
                        </Link>
                        <Link href={'/Admin/Rarity'}>
                            <div className={clsx(classes.link, type === "Rarity" && classes.selectItem)} onClick={() => setType("Rarity")}>
                                    Rarity
                            </div>
                        </Link>
                        <Link href={'/Admin/Boost'}>
                            <div className={clsx(classes.link, type === "Boost" && classes.selectItem)} onClick={() => setType("Boost")}>
                                    Revenue
                            </div>
                        </Link>
                        <Link href={'/Admin/Misc'}>
                            <div className={clsx(classes.link, type === "Misc" && classes.selectItem)} onClick={() => setType("Misc")}>
                                    Misc
                            </div>
                        </Link>
                    </div>
                </div>
        </Modal>
    )
}

export default AdminSideBarDialog;