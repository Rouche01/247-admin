import React, { useContext, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import Dashboard from "../components/Dashboard";
import DataTable from "../components/DataTable";
import Pagination from "../components/uiComponents/Pagination";
import { usePagination } from "../hooks/pagination";
import { contentLibrary } from "../utils/dummyData";
import RoundedBtnWithIcon from "../components/uiComponents/RoundedBtnWithIcon";
import UploadContentModal from "../components/uiComponents/UploadContentModal";
import ContentItemRow from "../components/ContentItemRow";
import ConfirmationModal from "../components/uiComponents/ConfirmationModal";
import { Context as ContentLibraryContext } from "../context/ContentLibraryContext";
import { convertSecToMMSS } from "../utils/numFormatter";
import toast from "react-hot-toast";

const tableHeaders = [
  "",
  "Title",
  "Duration",
  "Category",
  "Date",
  "Plays",
  "Status",
  "",
];

const ContentLibrary = () => {
  const [checkedContentItem, setCheckedContentItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shownRows, setShownRows] = useState(5);

  const [contentMedia, setContentMedia] = useState([]);
  const [contentDuration, setContentDuration] = useState();

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const {
    state: { creatingContent },
    createContentItem,
  } = useContext(ContentLibraryContext);

  const { currentList, indexOfFirstItem, indexOfLastItem, pages } =
    usePagination(currentPage, shownRows, contentLibrary);

  const toggleContentItemCheck = (idx) => {
    if (checkedContentItem.includes(idx)) {
      const index = checkedContentItem.indexOf(idx);
      const newCheckedAdvertisers = [...checkedContentItem];
      newCheckedAdvertisers.splice(index, 1);
      setCheckedContentItem(newCheckedAdvertisers);
    } else {
      setCheckedContentItem([...checkedContentItem, idx]);
    }
  };

  const handleUploadNewContent = async (data) => {
    console.log(data, "uploading new content...");
    console.log(contentMedia, convertSecToMMSS(contentDuration));

    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("duration", convertSecToMMSS(contentDuration));
    formData.append("mediaItem", contentMedia[0]);

    await createContentItem(formData, () =>
      toast.success("New content created!")
    );

    setUploadModalOpen(false);
  };

  const handleRemoveItemFromPlaylist = (item) => {
    console.log(item, "removing item from playlist...");
  };

  const handleAddItemToPlaylist = (item) => {
    console.log(item, "adding item to playlist...");
  };

  const handleDeleteContentItem = () => {
    setConfirmDeleteOpen(false);
    console.log("Deleting content...");
  };

  return (
    <Dashboard>
      <div className="mt-20 rounded-md bg-247-secondary border-2 border-247-dark-text mb-10">
        <div className="flex py-4 px-8 justify-end">
          <RoundedBtnWithIcon
            title="Upload Content"
            icon={<FiUploadCloud className="mr-3" size={22} />}
            onBtnClick={() => setUploadModalOpen(true)}
          />
        </div>
        <DataTable headers={tableHeaders}>
          {currentList.map((contentItem, idx) => (
            <ContentItemRow
              checkedItems={checkedContentItem}
              contentItem={contentItem}
              index={idx}
              toggleItemCheck={toggleContentItemCheck}
              key={`contentItem_${idx}`}
              setConfirmItemDelete={setConfirmDeleteOpen}
              removeItemFromPlaylist={handleRemoveItemFromPlaylist}
              addItemToPlaylist={handleAddItemToPlaylist}
            />
          ))}
        </DataTable>
      </div>
      <div className="flex items-center justify-end mb-20">
        <Pagination
          activePage={currentPage}
          dataLength={contentLibrary.length}
          firstItem={indexOfFirstItem + 1}
          lastItem={indexOfLastItem}
          pages={pages}
          setActivePage={setCurrentPage}
          setVisibleRows={setShownRows}
          visibleRows={shownRows}
        />
      </div>
      <UploadContentModal
        isOpen={uploadModalOpen}
        setIsOpen={setUploadModalOpen}
        handleUpload={handleUploadNewContent}
        setMediaItem={setContentMedia}
        setMediaDuration={setContentDuration}
        creatingContent={creatingContent}
      />
      <ConfirmationModal
        open={confirmDeleteOpen}
        setOpen={setConfirmDeleteOpen}
        text="Are you sure you want to delete this content?"
        icon={<FaRegTrashAlt size={28} color="#fff" />}
        handleConfirmation={handleDeleteContentItem}
      />
    </Dashboard>
  );
};

export default ContentLibrary;
