import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CustomBoxFullWidth,
  CustomStackFullWidth,
} from "styled-components/CustomStyles.style";
import CustomContainer from "../../container";
import HeroTitleSection from "./HeroTitleSection";
import DollarSignHighlighter from "components/DollarSignHighlighter";

// Hero GIF image
import heroGif from "../assets/hero_background.gif";

const DynamicModuleSelection = dynamic(() =>
  import("./module-selection/ModuleSelectionRaw")
);

const HeroSection = ({ landingPageDataheroSection }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLocation(window.localStorage.getItem("location"));
    }
  }, []);

  const calculateTopMargin = () => {
    if (currentLocation) {
      return {
        xs: "4rem",
        sm: "5rem",
        md: "7rem",
      };
    } else {
      return {
        xs: "4rem",
        sm: "5rem",
        md: "5rem",
      };
    }
  };

  return (
    <>
      {/* Hero GIF Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1920px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Image
            src={heroGif}
            alt="Hero Banner Animation"
            width={1920}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: isMobile ? "10px" : "16px",
            }}
            priority
            unoptimized
          />
        </Box>
      </Box>

      {/* Main Hero Content */}
      <CustomContainer>
        <CustomBoxFullWidth
          sx={{
            marginTop: calculateTopMargin(),
            borderRadius: "20px",
            position: "relative",
            background: `linear-gradient(
              1.02deg,
              rgba(3, 157, 85, 0.1) -12.87%,
              rgba(3, 157, 85, 0.02) 99.13%
            )`,
            padding: { xs: "13px", md: "30px" },
            display: "flex",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
            }}
          >
            <CustomStackFullWidth
              spacing={2}
              sx={{
                mb: 3,
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "30px",
                    md: "40px",
                  },
                  fontWeight: "bold",
                  color: theme.palette.neutral[1000],
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                <DollarSignHighlighter
                  theme={theme}
                  text={landingPageDataheroSection?.header_title}
                />
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "16px",
                  },
                  fontWeight: "400",
                  color: theme.palette.text.secondary,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {landingPageDataheroSection?.header_sub_title}
              </Typography>
            </CustomStackFullWidth>

            <Box
              sx={{
                marginTop: {
                  xs: "1rem",
                  md: "1.5rem",
                },
                width: "100%",
                marginInline: "auto",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "20px",
                  },
                  fontWeight: "500",
                  color: theme.palette.neutral[500],
                  textAlign: "center",
                  lineHeight: 1.2,
                  marginBottom: {
                    xs: "10px",
                    md: "1rem",
                  },
                }}
              >
                {landingPageDataheroSection?.header_tag_line}
              </Typography>

              <HeroTitleSection
                landingPageData={landingPageDataheroSection}
              />
            </Box>
          </Box>
        </CustomBoxFullWidth>
      </CustomContainer>
    </>
  );
};

export default HeroSection;