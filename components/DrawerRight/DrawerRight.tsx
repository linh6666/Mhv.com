import React from 'react';
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from './DrawerRight.module.css';

export default function App() {
  const [selectedStatus, setSelectedStatus] = React.useState<string>("Available");
  const [selectedBedrooms, setSelectedBedrooms] = React.useState<string>("1");
  const [selectedBathrooms, setSelectedBathrooms] = React.useState<string>("1");
  const [selectedAspect, setSelectedAspect] = React.useState<string>("E");

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status === selectedStatus ? "" : status);
  };

  const handleBedroomsClick = (bedrooms: string) => {
    setSelectedBedrooms(bedrooms === selectedBedrooms ? "" : bedrooms);
  };

  const handleBathroomsClick = (bathrooms: string) => {
    setSelectedBathrooms(bathrooms === selectedBathrooms ? "" : bathrooms);
  };

  const handleAspectClick = (aspect: string) => {
    setSelectedAspect(aspect === selectedAspect ? "" : aspect);
  };

  const handleClear = () => {
    setSelectedStatus("");
    setSelectedBedrooms("");
    setSelectedBathrooms("");
    setSelectedAspect("");
  };

  const handleSearch = () => {
    console.log({
      status: selectedStatus,
      bedrooms: selectedBedrooms,
      bathrooms: selectedBathrooms,
      aspect: selectedAspect
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Search Input */}
        <div className={styles.searchWrapper}>
          <Input
            classNames={{
              wrapper: styles.inputWrapper,
              input: styles.searchInput
            }}
            placeholder="Search Apartment Number ..."
            rightSection={
              <Button
                variant="subtle"
                className={styles.searchButton}
                onClick={handleSearch}   
              
                
                unstyled
                
              >
                <IconSearch size={20}
 className={styles.icon} />
              </Button>
            }
          />
        </div>

        {/* Status Filter */}
        <div className={styles.section}>
          <div className={styles.label}>Status:</div>
          <div className={styles.buttonRow}>
            <StatusButton label="Available" isSelected={selectedStatus === "Available"} onClick={() => handleStatusClick("Available")} bgColor="bg1" />
            <StatusButton label="Interested" isSelected={selectedStatus === "Interested"} onClick={() => handleStatusClick("Interested")} bgColor="bg2" />
          </div>
          <div className={styles.buttonRow}>
            <StatusButton label="Deposit" isSelected={selectedStatus === "Deposit"} onClick={() => handleStatusClick("Deposit")} bgColor="bg3" />
            <StatusButton label="Sold" isSelected={selectedStatus === "Sold"} onClick={() => handleStatusClick("Sold")} bgColor="bg4" />
          </div>
        </div>

        {/* Bedrooms Filter */}
        <div className={styles.section}>
          <div className={styles.label}>Bedrooms:</div>
          <div className={styles.diamondRow}>
            <DiamondButton label="1" isSelected={selectedBedrooms === "1"} onClick={() => handleBedroomsClick("1")} />
            <DiamondButton label="2" isSelected={selectedBedrooms === "2"} onClick={() => handleBedroomsClick("2")} />
            <DiamondButton label="3" isSelected={selectedBedrooms === "3"} onClick={() => handleBedroomsClick("3")} />
          </div>
        </div>

        {/* Bathrooms Filter */}
        <div className={styles.section}>
          <div className={styles.label}>Bathrooms:</div>
          <div className={styles.diamondRow}>
            <DiamondButton label="1" isSelected={selectedBathrooms === "1"} onClick={() => handleBathroomsClick("1")} />
            <DiamondButton label="2" isSelected={selectedBathrooms === "2"} onClick={() => handleBathroomsClick("2")} />
          </div>
        </div>

        {/* Aspect Filter */}
        <div className={styles.section}>
          <div className={styles.label}>Aspect:</div>
          <div className={styles.diamondRow}>
            <DiamondButton label="E" isSelected={selectedAspect === "E"} onClick={() => handleAspectClick("E")} />
            <DiamondButton label="W" isSelected={selectedAspect === "W"} onClick={() => handleAspectClick("W")} />
            <DiamondButton label="S" isSelected={selectedAspect === "S"} onClick={() => handleAspectClick("S")} />
            <DiamondButton label="N" isSelected={selectedAspect === "N"} onClick={() => handleAspectClick("N")} />
          </div>
          <div className={styles.diamondRow}>
            <DiamondButton label="SE" isSelected={selectedAspect === "SE"} onClick={() => handleAspectClick("SE")} />
            <DiamondButton label="NE" isSelected={selectedAspect === "NE"} onClick={() => handleAspectClick("NE")} />
            <DiamondButton label="SW" isSelected={selectedAspect === "SW"} onClick={() => handleAspectClick("SW")} />
            <DiamondButton label="NW" isSelected={selectedAspect === "NW"} onClick={() => handleAspectClick("NW")} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Button variant="outline" className={styles.clearBtn} onClick={handleClear}>
            Clear
          </Button>
          <Button className={styles.searchBtn} onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

const StatusButton = ({ label, isSelected, onClick, bgColor }: { label: string; isSelected: boolean; onClick: () => void; bgColor: string }) => (
  <button
    className={`${styles.statusBtn} ${styles[bgColor]} ${isSelected ? styles.selected : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const DiamondButton = ({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) => (
  <button
    className={`${styles.diamond} ${isSelected ? styles.selectedDiamond : ''}`}
    onClick={onClick}
  >
    <span className={styles.diamondText}>{label}</span>
  </button>
);
