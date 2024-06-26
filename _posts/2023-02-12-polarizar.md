---
layout: post
title:  "Polarizar: Visual odometry for the 2023 FTC robotics competition"
date:   2023-02-12
categories: blog code robotics
---

**The problem: Our robot needs to precisely navigate a field of poles.**

<video controls="" width="720">
  <source src="/media/polarizar-w720.mp4" type="video/mp4"/>
</video>

Odometry is a critical component of any fast and precise Autonomous program. In designing our Autonomous strategy, we considered several conventional means of odometry, but discarded every single one for their flaws: Inertial Measurement Units suffer from significant drift during integration; Encoder odometry can be very precise on the short scales, but lack the accuracy for navigating around multiple poles; And while distance sensors can detect poles to high precision, they lack a wide field of view.

In the end, we decided to explore visual odometry instead, which allows our robot to know its position and orientation on the field from the camera alone. This approach is especially useful for this FTC season due to the lattice of highly visible poles on the field. The plan was this: track the positions of poles in the camera, convert them into coordinates on the field, and from them, compute the motion of the robot. In between poles, encoders can then provide more precise positions on top of visual odometry.

Because our specific pole recognition odometry strategy was, as far as we know, completely novel, we embarked on this project with low-level OpenCV. We first prototyped programs in Python on laptop, which was faster to debug and iterate. Our first experiment was determining the positions of cones on a table from a laptop camera: He learned to project the table onto a plane, then isolate the colors to find the centers of red and blue contours, producing accurate positions for the cones. We then applied the technique to the field: Isolating the yellow poles and projecting their lowest points onto a square plane.

We first planned to calculate the robot's motion from the relative frame-by-frame changes in each pole's position. However, this approach faced IMU-like integration drift over time: if the robot moved in a circle, its calculated position would not end up where it started. After a divine revelation from semi-nude men, we realized we could measure the poles' absolute position from "ground-truth" measurements instead: This was not easy, because only two to three poles are visible in our off-the-shelf webcam, so there is little data to match them with the 18 ground-truth poles. However, past position estimates can crudely align them closely enough to match and calculate the absolute difference.

Here is the algorithm in its entirety: First, we identify the poles by color. Then, we project them onto a field-sized square plane. Next, we shift them by the last estimated robot position to match them with the absolute positions of the ground-truth poles. Finally, we calculate the difference to update the estimated robot position. Because this approach always measures against the ground truth, errors do not accumulate over time. There is noise from camera shakes and uncertain pole identification, but as long as two or more poles stay in the field of view at all times, we can obtain an accurate position of the robot from the camera alone, and the average error stays constant.

This can be further improved with sensor fusion: using IMUs and encoders on top of our undrifting visual odometry increases precision between poles, and distance sensors help with exact alignment directly in front of poles.
