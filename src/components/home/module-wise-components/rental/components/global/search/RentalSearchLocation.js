import { useEffect, useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Autocomplete,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

const RentalSearchLocation = (props) => {
  const {
    HandleChangeForSearch,
    predictions,
    handleChange,
    label,
    onFocus,
    value,
    endIcon,
    startIcon,
    pickLocationFormAddress,
    height = "45px",
    width = 350,
    result,
    getCurrentLocation,
    fromHome,
    setOpenMap,
    focusedField,
    onEnterKey,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseDownRecentAddresses = (event, selectedValue) => {
    event.stopPropagation();

    if (selectedValue?.isCurrent === "current") {
      getCurrentLocation?.(selectedValue);
    } else if (selectedValue) {
      pickLocationFormAddress?.(selectedValue);
      setDropdownOpen(false);
    }
  };

  let recentlyAddress;

  if (typeof window !== "undefined") {
    const storedAddress = localStorage.getItem(
      "destination_location"
    );

    if (storedAddress) {
      try {
        recentlyAddress = JSON.parse(storedAddress);
      } catch (error) {
        recentlyAddress = undefined;
      }
    }
  }

  return (
    <Autocomplete
      fullWidth
      disabled={result === false}
      defaultValue={value?.description || []}
      value={value || []}
      options={predictions || []}
      getOptionLabel={(option) => option.description || ""}
      onChange={(event, selectedValue) =>
        handleChange(event, selectedValue)
      }
      isOptionEqualToValue={(option, selectedValue) =>
        option.description === selectedValue?.description
      }
      clearOnBlur={false}
      open={dropdownOpen}
      onOpen={() => setDropdownOpen(true)}
      onClose={() => {
        if (value?.description) {
          setDropdownOpen(false);
        }
      }}
      sx={{
        width,
        maxWidth: "100%",
      }}
      PaperComponent={(paperProps) => (
        <Paper
          sx={{
            borderRadius: "0 0 4px 4px",
          }}
          {...paperProps}
        />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          onFocus={onFocus}
          label={label}
          placeholder={label}
          onChange={(event) =>
            HandleChangeForSearch(event)
          }
          onKeyDown={(event) => {
            if (event.key === "Enter" && onEnterKey) {
              event.preventDefault();
              onEnterKey(event);
            }
          }}
          onBlur={() => {
            timeoutRef.current = setTimeout(() => {
              setDropdownOpen(false);
            }, 300);
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height,
              padding: "5.5px 4px 7.5px 6px",
              paddingRight: "10px !important",

              "& fieldset": {
                border: `1px solid ${(theme) =>
                  theme.palette.neutral[300]}`,
              },

              "&:hover fieldset": {
                borderColor: "#888",
              },

              "&.Mui-focused fieldset": {
                border: "1px solid",
                borderColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.4),
              },
            },

            "& .MuiAutocomplete-input": {
              paddingLeft: startIcon
                ? "6px !important"
                : undefined,
              minWidth: 0,
              textOverflow: "ellipsis",
            },

            "& .MuiInputLabel-root": {
              padding: "0 4px",
              transform: "translate(14px, -6px) scale(0.75)",
            },
          }}
          InputProps={{
            ...params.InputProps,

            startAdornment: startIcon ? (
              <InputAdornment
                position="start"
                sx={{
                  ml: 0.5,
                  mr: 1,
                  flexShrink: 0,
                }}
              >
                {startIcon}
              </InputAdornment>
            ) : null,

            endAdornment: endIcon ? (
              <InputAdornment position="end">
                {endIcon}
              </InputAdornment>
            ) : null,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
};

export default RentalSearchLocation;