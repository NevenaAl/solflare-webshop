import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: 'Wireless Mouse',
        price: 25.99,
        description:
          'The Wireless Mouse is designed for comfort and efficiency, offering a sleek and ergonomic design that fits perfectly in your hand. Ideal for both everyday use and professional environments, this mouse provides the freedom of wireless connectivity with the reliability of a wired device.',
        features: [
          'Ergonomic Design: The contoured shape and soft rubber grips ensure that your hand remains comfortable, even after long hours of use.',
          'Wireless Connectivity: Enjoy the convenience of wireless technology with a reliable connection up to 10 meters (33 feet) away.',
          'High Precision: With a 1600 DPI optical sensor, this mouse delivers smooth and accurate tracking on almost any surface.',
          'Long Battery Life: The mouse uses a single AA battery (included) and can last up to 12 months before needing a replacement.',
          'Plug-and-Play: Simply plug the USB receiver into your computer’s USB port and start using your mouse right away, without the need for additional software.',
          'Portable Size: Lightweight and compact, it’s easy to take this mouse with you wherever you go.',
        ],
        specifications: {
          DPI: 1600,
          'Connection Type': 'Wireless (2.4 GHz)',
          'Operating Range': 'Up to 10 meters (33 feet)',
          Battery: '1 x AA (included)',
          Dimensions: '4.4 x 2.5 x 1.5 inches',
          Weight: '3.2 ounces',
          Compatibility: ['Windows', 'macOS', 'Linux'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['Wireless Mouse', 'USB Receiver', '1 x AA Battery'],
        },
      },
      {
        id: 2,
        name: 'Mechanical Keyboard',
        price: 79.99,
        description:
          'A high-quality mechanical keyboard with customizable RGB lighting, offering a tactile and responsive typing experience for both gaming and professional use.',
        features: [
          'Customizable RGB Lighting: Personalize your keyboard with millions of colors and various lighting effects.',
          'Tactile Switches: Enjoy the satisfying click and tactile feedback with each keystroke.',
          'Durable Build: Constructed with a sturdy aluminum frame for long-lasting durability.',
          'Full Key Rollover: Ensures every keypress is registered, even during intense gaming sessions.',
          'Programmable Macros: Customize and record macros for complex commands.',
          'Ergonomic Design: Comes with a detachable wrist rest for added comfort.',
        ],
        specifications: {
          'Switch Type': 'Mechanical',
          Lighting: 'RGB',
          'Connection Type': 'Wired (USB)',
          Dimensions: '17.5 x 5.5 x 1.5 inches',
          Weight: '2.3 pounds',
          Compatibility: ['Windows', 'macOS'],
        },
        additionalInformation: {
          Warranty: '2-year limited warranty',
          'In the Box': [
            'Mechanical Keyboard',
            'Detachable Wrist Rest',
            'User Manual',
          ],
        },
      },
      {
        id: 3,
        name: 'Gaming Headset',
        price: 59.99,
        description:
          'A surround sound gaming headset with a noise-canceling microphone, designed for immersive audio and clear communication.',
        features: [
          'Surround Sound: Experience immersive 7.1 virtual surround sound.',
          'Noise-Canceling Microphone: Communicate clearly with a noise-canceling boom mic.',
          'Comfortable Design: Soft memory foam ear cushions and an adjustable headband for long gaming sessions.',
          'In-line Controls: Easily adjust volume and mute the microphone with in-line controls.',
          'Durable Build: Made with high-quality materials for durability.',
          'Cross-Platform Compatibility: Works with PC, consoles, and mobile devices.',
        ],
        specifications: {
          Sound: '7.1 Virtual Surround',
          'Connection Type': 'Wired (3.5mm jack / USB)',
          Microphone: 'Detachable, Noise-Canceling',
          Dimensions: '8.5 x 7 x 4 inches',
          Weight: '12 ounces',
          Compatibility: [
            'Windows',
            'macOS',
            'PS4',
            'Xbox One',
            'Switch',
            'Mobile',
          ],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': [
            'Gaming Headset',
            'Detachable Microphone',
            'USB Adapter',
            'User Manual',
          ],
        },
      },
      {
        id: 4,
        name: '4K Monitor',
        price: 299.99,
        description:
          'A 27-inch 4K UHD monitor with vibrant colors and a high refresh rate, perfect for gaming, design, and professional work.',
        features: [
          '4K UHD Resolution: Experience stunning 3840 x 2160 resolution.',
          'High Refresh Rate: Smooth visuals with a 144Hz refresh rate.',
          'IPS Panel: Wide viewing angles and accurate colors with an IPS panel.',
          'HDR Support: Enhanced contrast and color accuracy with HDR10 support.',
          'Ergonomic Stand: Adjustable stand for height, tilt, and swivel adjustments.',
          'Multiple Inputs: HDMI, DisplayPort, and USB-C connectivity.',
        ],
        specifications: {
          Resolution: '3840 x 2160 (4K UHD)',
          'Screen Size': '27 inches',
          'Refresh Rate': '144Hz',
          'Panel Type': 'IPS',
          Connectivity: ['HDMI', 'DisplayPort', 'USB-C'],
          Dimensions: '24.5 x 14.5 x 2 inches (without stand)',
          Weight: '12 pounds',
          Compatibility: ['Windows', 'macOS'],
        },
        additionalInformation: {
          Warranty: '3-year limited warranty',
          'In the Box': [
            '4K Monitor',
            'Stand',
            'HDMI Cable',
            'DisplayPort Cable',
            'Power Adapter',
            'User Manual',
          ],
        },
      },
      {
        id: 5,
        name: 'Portable SSD',
        price: 99.99,
        description:
          'A compact and fast 1TB portable SSD for all your storage needs, with high-speed data transfer and durable design.',
        features: [
          'High-Speed Transfer: Up to 1050MB/s read and 1000MB/s write speeds.',
          'Compact Design: Slim and lightweight, easily fits in your pocket.',
          'Durable Build: Shock-resistant and water-resistant (IP55 rating).',
          'Cross-Platform Compatibility: Works with Windows, macOS, and Android.',
          'Secure Encryption: Built-in 256-bit AES hardware encryption.',
          'Easy Backup: Simple drag-and-drop file backup.',
        ],
        specifications: {
          Capacity: '1TB',
          Interface: 'USB 3.2 Gen 2',
          Dimensions: '3.4 x 2.2 x 0.4 inches',
          Weight: '1.4 ounces',
          Compatibility: ['Windows', 'macOS', 'Android'],
        },
        additionalInformation: {
          Warranty: '3-year limited warranty',
          'In the Box': [
            'Portable SSD',
            'USB-C to USB-C Cable',
            'USB-C to USB-A Adapter',
            'User Manual',
          ],
        },
      },
      {
        id: 6,
        name: 'Webcam',
        price: 49.99,
        description:
          'A high-definition webcam with a built-in microphone, providing clear video and audio for video calls and streaming.',
        features: [
          'Full HD 1080p: Crystal clear video quality with 1080p resolution.',
          'Built-In Microphone: Noise-reducing microphone for clear audio.',
          'Plug-and-Play: Easy setup with USB connectivity, no drivers needed.',
          'Adjustable Clip: Securely mounts on your monitor or laptop.',
          'Wide-Angle Lens: 90-degree field of view for wide shots.',
          'Flexible Design: Swivels 360 degrees for versatile positioning.',
        ],
        specifications: {
          Resolution: '1080p',
          Microphone: 'Built-In, Noise-Reducing',
          'Connection Type': 'Wired (USB)',
          Dimensions: '2.8 x 1.2 x 1 inches',
          Weight: '3 ounces',
          Compatibility: ['Windows', 'macOS', 'Linux'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['Webcam', 'USB Cable', 'User Manual'],
        },
      },
      {
        id: 7,
        name: 'Bluetooth Speaker',
        price: 39.99,
        description:
          'A portable Bluetooth speaker with powerful sound and long battery life, perfect for outdoor and indoor use.',
        features: [
          'Powerful Sound: High-quality sound with deep bass.',
          'Bluetooth Connectivity: Seamlessly connects to your devices via Bluetooth.',
          'Long Battery Life: Up to 24 hours of playtime on a single charge.',
          'Waterproof Design: IPX7 waterproof rating for outdoor use.',
          'Compact and Portable: Lightweight and easy to carry.',
          'Built-In Microphone: Supports hands-free calls.',
        ],
        specifications: {
          'Output Power': '10W',
          'Battery Life': 'Up to 24 hours',
          'Waterproof Rating': 'IPX7',
          'Connection Type': 'Bluetooth 5.0',
          Dimensions: '6.5 x 2.8 x 2.7 inches',
          Weight: '12 ounces',
          Compatibility: ['iOS', 'Android', 'Windows'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['Bluetooth Speaker', 'Charging Cable', 'User Manual'],
        },
      },
      {
        id: 8,
        name: 'Smartphone Stand',
        price: 19.99,
        description:
          'An adjustable smartphone stand perfect for hands-free use, offering a stable and flexible design for any viewing angle.',
        features: [
          'Adjustable Angle: Easily adjusts to your preferred viewing angle.',
          'Stable Base: Non-slip base ensures stability on any surface.',
          'Foldable Design: Compact and foldable for easy portability.',
          'Universal Compatibility: Fits all smartphones and small tablets.',
          'Durable Build: Made of high-quality aluminum alloy.',
          'Cable Management: Keeps your charging cable neatly organized.',
        ],
        specifications: {
          Material: 'Aluminum Alloy',
          Dimensions: '4.3 x 3.1 x 0.5 inches (folded)',
          Weight: '5 ounces',
          Compatibility: ['All smartphones and small tablets'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['Smartphone Stand', 'User Manual'],
        },
      },
      {
        id: 9,
        name: 'Laptop Cooling Pad',
        price: 29.99,
        description:
          'A laptop cooling pad with adjustable height and quiet fans, designed to keep your laptop cool and improve ergonomics.',
        features: [
          'Adjustable Height: Multiple height settings for improved ergonomics.',
          'Quiet Fans: Two powerful and quiet fans for optimal cooling.',
          'LED Lighting: Blue LED lighting enhances the aesthetic.',
          'USB Powered: Conveniently powered via USB, no external power needed.',
          'Anti-Slip Design: Non-slip surface holds your laptop securely.',
          'Wide Compatibility: Supports laptops up to 17 inches.',
        ],
        specifications: {
          'Fan Size': '2 x 120mm',
          'Fan Speed': '1200 RPM',
          'Power Source': 'USB',
          Dimensions: '14 x 10 x 1 inches',
          Weight: '1.6 pounds',
          Compatibility: ['Laptops up to 17 inches'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['Laptop Cooling Pad', 'USB Cable', 'User Manual'],
        },
      },
      {
        id: 10,
        name: 'USB-C Hub',
        price: 34.99,
        description:
          'A multi-port USB-C hub with HDMI, USB-A, and SD card slots, expanding the connectivity of your laptop or desktop.',
        features: [
          'Multiple Ports: HDMI, 3 x USB-A, SD/MicroSD card slots, and USB-C power delivery.',
          '4K HDMI Output: Supports 4K UHD video output for external displays.',
          'Fast Data Transfer: USB 3.0 ports provide fast data transfer speeds.',
          'Compact Design: Sleek and portable design for easy carrying.',
          'Plug-and-Play: No drivers or software needed, easy setup.',
          'Durable Build: Made of high-quality aluminum alloy for durability.',
        ],
        specifications: {
          Ports: ['HDMI', '3 x USB-A', 'SD/MicroSD', 'USB-C Power Delivery'],
          'HDMI Resolution': 'Up to 4K UHD',
          Material: 'Aluminum Alloy',
          Dimensions: '4.5 x 1.1 x 0.4 inches',
          Weight: '2 ounces',
          Compatibility: ['USB-C laptops and devices'],
        },
        additionalInformation: {
          Warranty: '1-year limited warranty',
          'In the Box': ['USB-C Hub', 'User Manual'],
        },
      },
    ]);
  });
  return <ProductList products={products}></ProductList>;
};

export default Home;
