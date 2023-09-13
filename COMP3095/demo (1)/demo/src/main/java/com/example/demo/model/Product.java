package com.example.demo;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(value = "product")
public class Product{
    private  String id;

    private  String name;

    private  String description;

    private  Bigdecimal price;

}