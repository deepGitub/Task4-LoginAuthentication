Project Title:
Channel Estimation Errors and Their Impact on Irregular Array Performance in Massive MIMO
Abstract
This report investigates the impact of imperfect Channel State Information (CSI) on the performance of irregular antenna arrays in massive Multiple-Input Multiple-Output (MIMO) systems. Prior research indicates that irregular arrays provide significant performance gains under the assumption of perfect CSI. However, this report, based on the referenced paper, analytically and numerically demonstrates that these gains vanish when realistic Least Squares (LS)-based channel estimation errors are considered.
1. Introduction
Massive MIMO systems rely on large-scale antenna arrays to serve multiple users simultaneously. Traditional research shows that irregular aperiodic arrays outperform regular half-wavelength spaced arrays, especially when algorithms like Zero Forcing (ZF) are used. However, all such studies assume perfect CSI at the base station. Perfect CSI is unrealistic due to noise, finite pilot lengths, and hardware limitations. This report analyzes how channel estimation errors influence irregular array performance.
2. Literature Review
Previous works (Ge et al., Pinchera et al., Bencivenni et al.) demonstrate that irregular arrays improve SINR and sum-rate performance. These improvements arise from increased aperture, better spatial diversity, and reduced grating lobes. However, they all assume perfect CSI. No prior detailed analysis considers LS estimation under Line-of-Sight (LoS) conditions, which this report focuses on.
3. System Model
We consider a single-cell uplink massive MIMO system with N = 200 dipoles at the base station and K users. The received signal is modeled as y = sqrt(SNR) * Hx + n, where H = ΓG includes mutual coupling effects. A pure LoS spherical wave propagation model is used.
4. Channel Model
The channel coefficient between the nth BS antenna and kth user is modeled as:
   G[n,k] = γ * exp(-j2πrn,k/λ) / rn,k
where rn,k is the BS-UE distance. The mutual coupling matrix Γ accounts for antenna interactions, calculated using standard dipole impedance formulations.
5. Channel Estimation (LS Method)
Orthogonal pilot sequences are used for channel estimation. The LS estimator for user k’s channel is:
   ĥ_k = h_k + sqrt(1/(ρτ_p)) * noise
This shows estimation error increases with distance, noise, and lower gain. The estimation errors directly impact interference suppression capabilities in ZF combining.
6. Antenna Array Layouts
Two arrays are studied:
• Regular array: Half-wavelength spacing, α = 0
• Irregular array: Tchebyshev polynomial–based, davg = 2λ, α = -0.03
Irregular arrays have a wider aperture and varying element density.
7. Detection Algorithms
Two linear combining schemes are considered:
• MRC: W = Ĥ
• ZF: W = Ĥ(ĤᵀĤ)^(-1)
ZF ideally cancels inter-user interference but is highly sensitive to estimation errors.
8. SINR Definition
SINR_k = |wᵀ_k h_k|² / ( Σ_{i≠k} |wᵀ_k h_i|² + (1/SNR)||w_k||² )
SINR is computed under both ideal CSI and LS-estimated CSI.
9. Simulation Setup
• Frequency: 60 GHz
• Users distributed in 5–200 m annulus, 120° sector
• Array with 200 dipoles
• K varied from 20 to 60
• SNR varied across a wide range

10. Results and Discussion
Key findings:
• LS estimation significantly increases NMSE, especially at large distances and angles.
• Under perfect CSI, irregular arrays outperform regular arrays, especially with ZF.
• Under LS estimation, ZF performance degrades heavily due to imperfect interference cancellation.
• The irregular array no longer provides SINR gain.
• In some regions, irregular arrays perform worse than regular arrays.
This demonstrates the dependency of irregular array performance on channel accuracy.
