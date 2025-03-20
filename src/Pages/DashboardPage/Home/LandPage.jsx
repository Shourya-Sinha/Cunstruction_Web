import { Box, Typography, IconButton } from "@mui/material";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Pause, PlayArrow } from "@mui/icons-material";
import { videoData } from "../../../Data/Data";

const LandPage = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [scrollingBackwards, setScrollingBackwards] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextVideoIndex, setNextVideoIndex] = useState(null);
  const [verticalLineScale, setVerticalLineScale] = useState(1);
  const [horizontalLineScale, setHorizontalLineScale] = useState(1);

  const isWithinLandPage = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
    return false;
  },);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.warn("Autoplay blocked by browser");
        setIsPlaying(false);
      });
    }
  }, [currentVideo]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = useCallback(
    (event) => {
      if (isWithinLandPage()) {
        if (!isTransitioning) {
          if (!videoCompleted) {
            event.preventDefault(); // Prevent default scroll while videos are scrolling
            const { deltaY } = event;
            let nextIndex = currentVideo;
            if (deltaY > 0) {
              // Scrolling down
              setScrollingBackwards(false);
              nextIndex = currentVideo + 1;
              if (nextIndex < videoData.length) {
                setNextVideoIndex(nextIndex);
                setIsTransitioning(true);
                setVerticalLineScale(0.8);
                setHorizontalLineScale(0.8);
                setTimeout(() => {
                  setCurrentVideo(nextIndex);
                  setVerticalLineScale(1);
                  setHorizontalLineScale(1);
                  setIsTransitioning(false);
                }, 300); // Adjust timing as needed for fade effect
              } else {
                setVideoCompleted(true); // Mark that all videos have been viewed
                console.log("Video Completed set to true");
              }
            } else {
              // Scrolling up (reverse scroll)
              if (currentVideo > 0 && deltaY < 0) {
                setScrollingBackwards(true);
                nextIndex = currentVideo - 1;
                setNextVideoIndex(nextIndex);
                setIsTransitioning(true);
                setVerticalLineScale(0.8);
                setHorizontalLineScale(0.8);
                setTimeout(() => {
                  setCurrentVideo(nextIndex);
                  setVerticalLineScale(1);
                  setHorizontalLineScale(1);
                  setIsTransitioning(false);
                }, 300);
              } else {
                setScrollingBackwards(false); // Reset when at the top
              }
            }
          } else {
            // Handling reverse scroll after completion
            const { deltaY } = event;
            console.log("Video Completed is true, deltaY:", deltaY, "currentVideo:", currentVideo);
            if (deltaY < 0) {
              event.preventDefault(); // Re-engage video scroll prevention
              setVideoCompleted(false);
              setScrollingBackwards(true);
              const nextIndex = currentVideo - 1;
              setNextVideoIndex(nextIndex);
              setIsTransitioning(true);
              setVerticalLineScale(0.8);
              setHorizontalLineScale(0.8);
              setTimeout(() => {
                setCurrentVideo(nextIndex);
                setVerticalLineScale(1);
                setHorizontalLineScale(1);
                setIsTransitioning(false);
              }, 300);
              console.log("Reverse scroll triggered, videoCompleted set to false, nextIndex:", nextIndex);
            }
          }
        }
      }
    },
    [videoCompleted, currentVideo, isTransitioning, isWithinLandPage]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // Add smooth scrolling effect when scrolling backwards
  useEffect(() => {
    if (scrollingBackwards) {
      const scrollContainer = containerRef.current;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.style.transition = "all 0.3s ease-in-out"; // Add a transition for smoother scrolling
    } else {
      const scrollContainer = containerRef.current;
      scrollContainer.style.scrollBehavior = "auto";
    }
  }, [scrollingBackwards]);

  return (
    <Box ref={containerRef}>
      {/* Video Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: 40, // Adjust margin as needed
            top: "10%",
            bottom: "10%",
            width: "2px",
            backgroundColor: "white",
            transformOrigin: "top center",
            transform: `scaleY(${verticalLineScale})`,
            transition: "transform 0.3s ease-in-out",
            zIndex: 2,
          }}
        />

        {/* Bottom Horizontal Line */}
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            right: "10%",
            bottom: 40, // Adjust margin as needed
            height: "2px",
            backgroundColor: "white",
            transformOrigin: "center bottom",
            transform: `scaleX(${horizontalLineScale})`,
            transition: "transform 0.3s ease-in-out",
            zIndex: 2,
          }}
        />

        <video
          ref={videoRef}
          key={videoData[currentVideo].src}
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isTransitioning && nextVideoIndex !== currentVideo ? 0 : 1, // Fade out during transition
            transition: "opacity 0.3s ease-in-out",
            zIndex: 0,
          }}
          onEnded={() => {
            if (currentVideo < videoData.length - 1) {
              setCurrentVideo((prev) => prev + 1);
            } else {
              setVideoCompleted(true);
            }
          }}
        >
          <source src={videoData[currentVideo].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Blur Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
            zIndex: 1,
          }}
        />

        {/* Left-side Video Indicator */}
        <Box
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 3,
          }}
        >
          {videoData.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: currentVideo === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
                transition: "background 0.3s",
              }}
            />
          ))}
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            zIndex: 2,
          }}
        >
          <Typography variant="h1">Welcome to Our Platform</Typography>
          <Typography variant="body1" sx={{ fontFamily: "Big Shoulders", fontWeight: 400, fontSize: "1.5rem" }}>
            {videoData[currentVideo].content} {/* Dynamic content */}
          </Typography>
        </Box>

        {/* Pause/Play Button */}
        <IconButton
          onClick={togglePlay}
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            background: "rgba(255, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
            color: "#fff",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255, 0, 0, 0.6)",
            zIndex: 3,
            cursor: "pointer",
            "&:hover": {
              background: "rgba(255, 0, 0, 0.5)",
            },
          }}
        >
          {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
        </IconButton>
      </Box>

      {/* Next Section (After Video) */}
      {/* <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <Typography variant="h2">Next Section Content</Typography>
      </Box> */}
    </Box>
  );
};

export default LandPage;