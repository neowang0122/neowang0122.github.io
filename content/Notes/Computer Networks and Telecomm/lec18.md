# Lecture 18 Ethernet

```
0.ARP 
1.Ethernet Frame
2.Switched LAN
```

# 0. ARP

assign IP address -> MAC address 

![[20241114-1409-39_Pasted image 20241114140937.png]]
L2 -> L2 -> L2
![[20241114-1409-46_Pasted image 20241114140944.png|281]]
![[20241114-1410-10_Pasted image 20241114141007.png|484]]

# 1. Frame Structure 

For ethernet technology
## a. Data field (==MTU== 46-1500 bytes) 

46 here include IP header. 

Stuffing 

## b. Reample 8 bytes

## c. Source & Destination MAC addresses

12 bytes

## d. CRC check field (4 bytes)

## e. Type field (2 bytes)

indicate what protocol is used in the upper layer 

Network Layer (IP): protocol field 
Transport layer: port #


![[20241114-1422-53_Pasted image 20241114142251.png]]
Hub: ==broadcast== frames to all interfaces, bit by bit 
Switch (L2 router): Can forward frames to proper interface, based on destination MAC addresses. 

A switch table 
Address: should be a MAC address, e.g. 51-AB-...
Interface: 3
Time: 13
![[20241114-1429-11_Pasted image 20241114142909.png]]
A frame with destination D sent from the left most device,
1. If D is not in the table, broadcast the frame.
2. If D is associated with interface 1, the operation would be figured out inside Subnet 1, nothing to do for the switch
3. If D is associated with interface 2, send to Interface 2. 

### How is a switch table built?

self-learning
when received a frame, 
	store source MAC, 
	corresponding interface time. (20 mins)

### Comparison 

|                                          | hub | Switch<br>(Anticipated topology) | Router |
| ---------------------------------------- | --- | -------------------------------- | ------ |
| plug & play                              | T   | T                                | F      |
| Complex topology                         | F   | F                                | T      |
| Processing time                          | N/A | small                            | large  |
| Optimal routing, <br>traffic engineering | F   | F                                | T      |
