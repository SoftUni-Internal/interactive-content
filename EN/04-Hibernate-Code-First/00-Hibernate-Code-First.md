[slide]

# Hibernate Code First Entity Relations

Using relational databases we cannot apply the mechanism of inheritance. 

So, we use JPA (Java Persistence API) to map the key features of inheritance in our relational database model.

The **javax.persistence.Inheritance** annotation is implementing our inheritance strategies.

JPA supports three types of inheritance strategies.

The following mapping strategies are used to map the entity data to the underlying database:

- A single **table per class** hierarchy.

- A table per **concrete entity class**.

- **Join** strategy - mapping common fields in a single table.

[html]
  <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />
  <video id="my-video" class="video-js vjs-16-9" controls="true"
    preload="auto" data-setup='{"playbackRates": [0.75, 0.9, 1, 1.25, 1.5, 2]}'>
      <source label="auto" src="https://testvideos.softuni.org/hls/demo/17.print-ascii-table-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" />
  </video>
  <script src="https://vjs.zencdn.net/7.8.4/video.js"></script>
[/html]

[/slide]

