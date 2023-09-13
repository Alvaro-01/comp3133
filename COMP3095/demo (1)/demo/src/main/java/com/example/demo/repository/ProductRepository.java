public  interface ProductRepository extends MongoRepository<Poduct,String>{

    @DeleteQuery
    void deleteById(UUID productId);
}