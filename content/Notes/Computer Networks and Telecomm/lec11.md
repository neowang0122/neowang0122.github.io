# Lecture 11 The Internet Protocol (IP) 

```
0 Scheduling Mechanism 
1 IP Datagram 
2 IPv4 Addressing
```

# Scheduling Mechanisms

|            | FIFO | Priority Queuing (Non-preemptive)                                        | Round Robin | Weighted Fair Queuing |
| ---------- | ---- | ------------------------------------------------------------------------ | ----------- | --------------------- |
|            |      | Transmit pkt from lower class only if the queue for high class is empty. |             |                       |
|            |      | ![[Pasted image 20241001143124.png\|300]]                                |             |                       |
| Diff Serv  | NO   | YES                                                                      | NO          | YES                   |
| Isolation  | NO   | NO                                                                       | YES         | YES                   |
| Efficiency | YES  | Yes                                                                      | YES         | YES                   |

## Weighted Fair Queuing (WFQ) 

![[20241008-1342-27_Pasted image 20241008134225.png]]
# IP Diagram 

## Datagram (Network Layer pkt) format 

### Version# 

### Header Length 

Because some IP header field is optional. 
- See Options below 

The shortest header is 20 bytes. 

![[20241008-1342-37_Pasted image 20241008134237.png]]

### Datagram Length (unit byte)

### Time-to-live (TTL) (8 bit) 

Max value = 255 

### Datagram Fragmentation

# IPv4 Addressing 

## Address for Interface 

![[20241008-1355-57_Pasted image 20241008135556.png]]

## An IP Address is typically written in a dotted-decimal format 

e.g. 200.23.16.0 -> **11001000.00010111.00010000.00000000**

## IP Address Allocation: Classful Addressing Allocation 

Class A: (8-bit subnet address): `200.***.***.***` 
Class B: (16-bit subnet address): `200.23.***.***` 
Class C: (24-bit subnet address): `200.23.16.***`

e.g. 128.84.0.0/16 -> Class B Addressing 

## Finer Allocations 

e.g. 200.23.16.0/20
- Fix the first 20 bits, vary the other bits. 

To binary format: 
==1100 1000 0001 0111 0001 | 000==0 0000 0000
... 
1100 1000 0001 0111 0001 | 1111 1111 1111 

If we separate this part into 8 departments (0 to 7): 
*Need extra 3 bits to do the seperation* 
- Dept 0: 200.23.16.0/23 
- ... 
- Dept 7: 200.23. (000|1110) .0 -> 200.23.30.0/23 

### Example 

![[20241008-1428-19_Pasted image 20241008142818.png]]

## DHCP 



## NAT

