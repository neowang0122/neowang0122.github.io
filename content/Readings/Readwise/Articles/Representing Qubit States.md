---
dg-publish: true
---
# Representing Qubit States

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[community.qiskit.org]]
- Full Title: Representing Qubit States
- Category: #articles
- URL: https://community.qiskit.org/textbook/ch-states/representing-qubit-states.html

## Highlights
- classical variables
- classical computers.
- In quantum computers, our basic variable is the qubit: a quantum variant of the bit.
- the same restrictions as normal bits do: they can store only a single binary piece of information, and can only ever give us an output of 0 or 1
- Each element in the statevector contains the probability of finding the car in a certain place:
- statevectors happen to be a very good way of keeping track of quantum systems, including quantum computers.
- This restriction is lifted for quantum bits. Whether we get a 0 or a 1 from a qubit only needs to be well-defined when a measurement is made to extract an output
- At that point, it must commit to one of these two options. At all other times, its state will be something more complex than can be captured by a simple binary value.
- mutually exclusive
- two orthogonal vectors.
  |0⟩=[10]|1⟩=[01].
- the bra-ket notation, introduced by Dirac.
- Since the states |0⟩|0⟩|0\rangle and |1⟩|1⟩|1\rangle form an orthonormal basis, we can represent any 2D vector with a combination of these two states.
- the qubit's statevector
- In quantum mechanics, we typically describe linear combinations such as this using the word 'superposition'.
- In Qiskit, we use the QuantumCircuit object to store our circuits, this is essentially a list of the quantum operations on our circuit and the qubits they are applied to.
